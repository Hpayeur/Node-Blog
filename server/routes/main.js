const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Blog's Home Page

router.get("/", async (req, res) => {
  const locals = {
    title: "Node,js Blog",
    description:
      " A Blog template application that will be used for your own use.",
  };
  try {
    const data = (await Post.find()).toSorted({ createdAt: "desc" });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
