const {Comment} = require ('../models');

const commentData = [
    {
        content:'Hey!! I just saw this topic the other day on class, once you understand how it works it becomes a really useful tool',
        date:'2021-07-20',
        user_id:3,
        post_id:1,
    },
    {
        content:'I really struggle with this one, on which page did you further research on this topic?',
        date:'2021-07-25',
        user_id:4,
        post_id:1,
    },
    {
        content:'Didnt know these existed, great to know',
        date:'2021-08-01',
        user_id:4,
        post_id:2,
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

