class ApiResponse {

    // The constructor method is called when a new instance of ApiResponse is created.
    // It initializes the instance with the provided status code, data, and an optional message.

    constructor(statusCode, data, message = "Success") {

        // set the statusCode property to the value passed to the constructor
        this.statusCode = statusCode;

        // set the data property to the value passed to the constructor.
        this.data = data;

        // set the message property to the value passed to the constructor, or use the default value "Success" if no message is provided.
        this.message = message;

        // set the success property to true if the statusCode is less than 400, indicating a successful response.
        // otherwise, set it to false, indicating an error response
        this.success = statusCode < 400;
    }
}