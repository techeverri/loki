const {
  createChromeAWSLambdaRenderer,
} = require('@ferocia-oss/loki-renderer-aws-lambda');

module.exports = {
  handler: createChromeAWSLambdaRenderer(),
};
