const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");
const redirectToID = require("../utils/redirect");
const validateUser = require("../utils/validate");
const validatePostAccess = require("../utils/validateEdit");

router.get("/", withAuth, redirectToID, async (req, res) => {});

router.get("/:id", withAuth, validateUser, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.params.id },
      raw: true,
      nest: true,
    });

    res.render("dashboard", {
      postData,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/edit/:id", withAuth, validatePostAccess, async (req, res) => {
  // Get all the text after the string "post="
  const postID = Number(req.params.id.match(/(?<=post=)(.*)/)[0]);
  try {
    const postData = await Post.findByPk(postID, {
      raw: true,
      nest: true,
    });
    res.render("editPost", {
      postData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/create/:id", withAuth, validateUser, async (req, res) => {
  try {
    res.render("newPost", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/create/:id", withAuth, validateUser, async (req, res) => {
  try {
    res.render("newPost", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
