const express = require("express");
const app = express();
const PORT = 5000;

const {
  fetchPosts
} = require("./data/dataService");


app.get("/posts", async (req, res) => {

  try {

    const posts = await fetchPosts();

    console.log(

      "Posts successfully retrieved and sent"

    );

    res.status(200).json(posts);

  } catch (error) {

    res.status(500).json({

      message:
        "Failed to retrieve posts"

    });

  }
});


app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`

  );

});