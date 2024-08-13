const fs = require('fs');

//------------------only for file system--------------------
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = data.users;
// -----------------------------------

exports.createUser = (req, res) => {
    console.log(req.body);

    users.push(req.body);
    res
        .status(201)
        .send(req.body)
}


exports.getAllUsers = (req, res) => {
    res.json(users)
}

exports.getUser = (req, res) => {
    const id = +req.params.id;

    console.log(req.body)
    const User = users.find(p => p.id === id)

    res.json(User)
}

exports.replaceUser = (req, res) => {
    const id = +req.params.id;

    console.log(req.body)

    const UserIndex = users.findIndex(p => p.id === id)

    users.splice(UserIndex, 1, { ...req.body, id: id })

    res.status(201).json()
}

exports.updateUser = (req, res) => {
    const id = +req.params.id;

    console.log(req.body);

    const UserIndex = users.findIndex(p => p.id === id)

    const User = users[UserIndex];

    users.splice(UserIndex, 1, { ...User, ...req.body, id: id })

    res.status(201).json()

}

exports.deleteUser = (req, res) => {
    const id = +req.params.id;

    const UserIndex = users.findIndex(p => p.id === id)

    const User = users[UserIndex]

    users.splice(UserIndex, 1)

    res.status(201).json(User)
}
