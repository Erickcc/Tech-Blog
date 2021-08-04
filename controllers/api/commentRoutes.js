const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", (req, res) => {
  const today = new Date();
  const formattedDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  Comment.create({
    content: req.body.comment,
    date: formattedDate,
    user_id: req.session.user_id,
    post_id: req.body.postID,
  })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
