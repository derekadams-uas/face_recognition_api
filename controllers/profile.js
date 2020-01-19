const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    db.select('*').from('users').where({ id })
        .then(user => {
            if (user.length) {
                res.json(user[0]);
            } else {
                res.status(400).json('Not Found')
            }
        })
        .catch(err => res.status(400).json('Error Getting User'));
}

const handleProfileUpdate = (req, res, db) => {
    const { id } = req.params;
    const { name, age, pet } = req.body.formInput;
    db('users')
        .where({ id: id })
        .update({ name: name })
        .then(resp => {
            if (resp) {
                res.json("Success");
            } else {
                res.status(400).json("Unable to Update");
            }
        })
        .catch(err => res.status(400).json("Error Updating User"));
}

module.exports = {
    handleProfileGet,
    handleProfileUpdate
}
