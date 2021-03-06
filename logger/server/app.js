Cluster.connect("mongodb://localhost/service-discovery");
Cluster.register("logger");

var Logs = new Meteor.Collection('logs');

Meteor.methods({
	"log": function(source, message) {
		this.unblock();
		Logs.insert({
			source: source,
			message: message,
			time: new Date()
		});
		console.log("[%s] %s", source, message);
	}
});