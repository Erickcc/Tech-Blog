const {Post} = require ('../models');

const postData = [
    {
        title:'Why MVC is so important',
        content:'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        date:'2021-07-10',
        user_id:1,
    },
    {
        title: 'Authentication vs Autorization',
        content: 'There is a difference between authentication and authorization. Authentication means confirming your identity, whereas authorization means being allowed to access to the system',
        date:'2021-07-11',
        user_id:2,
    },
    {
        title: 'Regular Expressions',
        content: 'A regular expression is a sequence of characters that specifies a search pattern',
        date:'2021-07-11',
        user_id:2,
    },
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
