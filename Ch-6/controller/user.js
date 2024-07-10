const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = data.users;

/**
 * Create a new user
 */
exports.createUser = (req, res) => {
  // Log the request body
  console.log(req.body);
  // Add the new user to the users array
  users.push(req.body);
  // Send a 201 status with the new user in the response body
  res.status(201).json(req.body);
};

/**
 * Get all users
 */
exports.getAllUsers = (req, res) => {
  // Send a 200 status with the users array in the response body
  res.json(users);
};

/**
 * Get a specific user by id
 */
exports.getUser = (req, res) => {
  const id = Number(req.params.id);
  // Find the user with the requested id
  const user = users.find((p) => p.id === id);
  // Send a 200 status with the user in the response body
  res.json(user);
};


/**
 * Replace a user by id
 *
 */
exports.replaceUser = (req, res) => {
  // Get the id from the request parameters
  const id = Number(req.params.id);
  // Find the index of the user with the requested id
  const userIndex = users.findIndex((p) => p.id === id);
  // Replace the user at the found index with the updated user
  users.splice(userIndex, 1, { ...req.body, id: id });
  // Send a 201 status with an empty response body
  res.status(201).json();
};

/**
 * Update a user by id
 *
 */
exports.updateUser = (req, res) => {
  // Get the id from the request parameters
  const id = Number(req.params.id);
  // Find the index of the user with the requested id
  const userIndex = users.findIndex((p) => p.id === id);
  // Get the user at the found index
  const user = users[userIndex];
  // Update the user with the updated data
  users.splice(userIndex, 1, { ...user, ...req.body });
  // Send a 201 status with the updated user in the response body
  res.status(201).json();
};

/**
 * Delete a user by id
 *
 */
exports.deleteUser = (req, res) => {
  // Get the id from the request parameters
  const id = Number(req.params.id);
  // Find the index of the user with the requested id
  const userIndex = users.findIndex((p) => p.id === id);
  // Get the user at the found index
  const user = users[userIndex];
  // Remove the user from the users array
  users.splice(userIndex, 1);
  // Send a 201 status with the deleted user in the response body
  res.status(201).json(user);
};

