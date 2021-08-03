const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: {
        model: User,
        attributes: ['name']
      },
      raw:true,
      nest:true
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: ['id','title', 'content', 'date'],
      include: {
        model: User,
        attributes: ['name'],
      },
    });

    const commentData = await Comment.findAll({
      attributes: ['content', 'date'],
      where: {
        post_id: req.params.id,
      },
      include: {
        model: User,
        attributes: ['name', 'id']
      },
      raw:true,
      nest:true
    });
    res.status(200).json([postData, commentData]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
