// this function is created to create our own error, let say in some case we want user to give a long password,
// but logically it's not an error if user will put small, so in such cases we will use this function.

export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode
    error.message = message
    return error;
}