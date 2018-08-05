
exports.travisDeployPubSub = (event, callback) => {
  console.log(`event: ${JSON.stringify(event)}`)
  const pubsubMessage = event.data;
  const name = pubsubMessage.data ? Buffer.from(pubsubMessage.data, 'base64').toString() : 'World';

  console.log(`Hello, ${name}!`);

  callback();
};
