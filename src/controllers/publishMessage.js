const { PubSub } = require('@google-cloud/pubsub');

require('dotenv/config');

const pubSubClient = new PubSub(process.env.GOOGLE_APPLICATION_CREDENTIALS);

async function publishMessage(data) {

    const dataBuffer = Buffer.from(data);

    try {
        const messageId = await pubSubClient
            .topic(process.env.topicNameOrId)
            .publishMessage({ data: dataBuffer });
        console.log(`Message ${messageId} published.`);
    } catch (error) {
        console.error(`Received error while publishing: ${error.message}`);
        process.exitCode = 1;
    }

    return data
}

module.exports = { publishMessage };