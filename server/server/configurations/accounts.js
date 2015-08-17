
ServiceConfiguration.configurations.upsert({
    service: "facebook"
}, {
    $set: {
        appId: Meteor.settings.facebook.clientId,
        secret: Meteor.settings.facebook.secret
    }
});
