const config = require('../config.json');

async function initiateAuth(req, res) {
    const options = {
        requestType: "code",
        redirectUri: "http://localhost:3000/oauth/callback",
        clientId: config.clientId,
        scopes: [
            "contacts.readonly",
            "contacts.write",
            "conversations/message.write",
            "conversations/message.readonly",
            "conversations/reports.readonly",
            "conversations.write",
            "conversations.readonly",
            "calendars.readonly",
            "calendars.write",
            "calendars/events.readonly",
            "calendars/events.write",
            "calendars/groups.readonly",
            "calendars/groups.write",
            "calendars/resources.readonly",
            "calendars/resources.write",
            "socialplanner/account.write",
            "socialplanner/account.readonly",
            "socialplanner/post.readonly",
            "socialplanner/post.write",
            "socialplanner/oauth.readonly",
            "socialplanner/oauth.write",
            "locations.write",
            "locations.readonly"
        ]
    };

    return res.redirect(`${config.baseUrl}/oauth/chooselocation?response_type=${options.requestType}&redirect_uri=${options.redirectUri}&client_id=${options.clientId}&scope=${options.scopes.join(' ')}`);
}

module.exports = initiateAuth;
