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
    const data = await Post.find().sort({ title: "desc" });
    res.render("index", { locals, data });
  } catch (error) {
    console.error(error);
  }
});

// Get Post by Id
router.get("/post/:id", async (req, res) => {
  try {
    let slug = req.params.id;
    const data = await Post.findById({ _id: slug });
    const locals = {
      title: data.title,
      description:
        "A Blog template application that will bes used for your own use.",
    };
    res.render("post", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
