// Define a function called asyncHandler that takes another function (requestHandler) as an argument.
const asyncHandler = (requestHandler) => {

    // Return a new middleware function that takes three arguments: req (request), res (response), and next (next middleware function).
    return (req, res, next) => {

        // Call the requestHandler function with the provided req, res, and next arguments.
        // Wrap this call in a Promise.resolve to ensure it returns a Promise.
        // If requestHandler returns a Promise that rejects, catch the error and pass it to the next middleware.
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
}

// Export the asyncHandler function to make it available for import in other files.
export { asyncHandler }


/**--------------------------------------------2nd way of doing it--------------------------------------------- */

/**
 *  
 // Define an asyncHandler function that takes another function (fn) as an argument.
// This function returns a new asynchronous middleware function.

const asyncHandler = (fn) => async (req, res, next) => {
    try {
        // Await the execution of the provided function (fn) with the req, res, and next arguments.
        // This ensures that any asynchronous operations within fn are properly awaited.
        await fn(req, res, next);
    } catch (err) {
        // If an error occurs during the execution of fn, catch the error.
        
        // Set the response status code to the error's code if it exists, or default to 500 (internal server error).
        res.status(err.code || 500).json({
            // Send a JSON response indicating the operation was unsuccessful.
            success: false,
            // Include the error message in the response.
            message: err.message
        });
    }
};

// Export the asyncHandler function to make it available for import in other files.
export { asyncHandler };

 * 
 * 
 * 
 */