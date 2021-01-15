/**
 * @desc    Send any success response
 *
 * @param   {string} message
 * @param   {object | array} results
 * @param   {number} statusCode
 */
exports.success = (results = [], statusCode = 200, message = 'Successfully', ) => {
    return {
        status: true,
        message,
        code: statusCode,
        results
    };
};

/**
 * @desc    Send any error response
 *
 * @param   {string} message
 * @param   {number} statusCode
 */
exports.error = (errors = null, statusCode = 500, message = 'Failure') => {
    // List of common HTTP request code
    // const codes = [200, 201, 400, 401, 404, 403, 422, 500];

    // Get matched code
    // const findCode = codes.find((code) => code == statusCode);

    // if (!findCode) statusCode = 500;
    // else statusCode = findCode;

    return {
        status: false,
        message,
        code: statusCode,
        errors
    };
};