const {User} = require ('../models');

// All the passwords are 12345678
const userData = [
    {
        name:'Noah Smith',
        email:'noah@gmail.com',
        password:'$2b$10$vgLDPYSZBVbX4YCsB8rLuOpHKGwiDVgARwC7iXcMh7u.dpomvUSDe',
    },
    {
        name:'James Brown',
        email:'james@gmail.com',
        password:'$2b$10$agGn8uUDlnkPr9XHJ3ydz.nammZjGr9YEEwLUCOOV/JIs.mlgu8LG',
    },
    {
        name:'Ava Lee',
        email:'ava@gmail.com',
        password:'$2b$10$DDG/Zkkqbc3l11jr6nF2F.GGWCqe3LNX.Lell7UCkdybSN/KvdmsO',
    },
    {
        name:'Mia Sanchez',
        email:'mia@gmail.com',
        password:'$2b$10$yPKiqhUvEKYo3PZIU4JQ5eO2cHIRlCp67DVpw.CrrGkSX0D2stKCK',
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
