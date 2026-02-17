const Post = require("../models/post");
function insertPostData() {
  Post.insertMany([
    {
      title: "Post One",
      body: "This is the body of post one.",
    },
    {
      title: "Post Two",
      body: "This is the body of post two.",
    },
  ]);
}

// insertPostData();
