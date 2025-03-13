const express = require("express");
const router = express.Router();
const Saree = require("../models/Products");
 

router.get("/search", async (req, res) => {
  try {
    const { search } = req.query;

    console.log(search);

    if (!search) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const results = await Saree.find({
      $text: { $search: search },
    });

    res.json(results);
    console.log(results);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

module.exports = router;
