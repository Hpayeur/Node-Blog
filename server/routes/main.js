const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Blog's Home Page
router.get("/", async (req, res) => {
  const locals = {
    title: "NodeJs Blog",
    description:
      " A Blog template application that will be used for your own use.",
  };
  try {
    const data = await Post.find().sort({ createdAt: "desc" });
    res.render("index", { locals, data });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
