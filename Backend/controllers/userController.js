// const userService = require('../services/userService');
// exports.addUser=async(req,res)=>{
//     try{
//         let payload =req.body
//         let addUs = await userService.addUser(payload)
//         return res.status(200).send({message:"status",data:''})
//     }catch(err){
//         return res.status(400).send(err)
//     }
// }



const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const register = (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    User.create(username, email, hashedPassword, (err, result) => {
        if (err) return res.status(500).send('Error registering user');
        res.status(201).send('User registered successfully');
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (err, results) => {
        if (err || results.length === 0) return res.status(400).send('User not found');
        
        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        
        if (!passwordIsValid) return res.status(401).send('Invalid Password');
        
        const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: 86400 });
        res.status(200).send({ auth: true, token });
    });
};

module.exports = { register, login };
