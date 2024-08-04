// Define a custom error class named ApiError that extends the built-in Error class
class ApiError extends Error {
    // Constructor to initialize the ApiError instance
    constructor(
        statusCode,             // HTTP status code representing the error
        message = "Something went wrong", // Default message if none is provided
        errors = [],            // Optional array to hold multiple error details
        stack = ""              // Optional custom stack trace
    ) {
        // Call the parent class (Error) constructor with the message argument
        super(message);

        // Set the HTTP status code for this error
        this.statusCode = statusCode;

        // Initialize additional properties for this error
        this.data = null;       // Placeholder for any additional data related to the error
        this.message = message; // Set the error message
        this.success = false;   // Indicates that the operation failed
        this.errors = errors;   // Store any additional error details

        // Check if a custom stack trace was provided
        if (stack) {
            this.stack = stack; // Use the provided custom stack trace
        } else {
            // Capture the stack trace automatically if none was provided
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
