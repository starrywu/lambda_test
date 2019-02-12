const isArray = require('lodash').isArray;

exports.handler = async (event) => {
    
    console.log("Lambda process");

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
