import express from "express";
import { MenuItem } from "../restaurant/menuItem.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find({});

    return res.status(200).json({
      count: menuItems.length,
      data: menuItems,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const menuItem = await MenuItem.findById(id);

    return res.status(200).json(menuItem);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.category ||
      !req.body.price
    ) {
      return res.status(400).send({
        message:
          "send all required fields: title, description, category, price",
      });
    }

    const newItem = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
    };

    const item = await MenuItem.create(newItem);

    return res.status(201).send(item);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const item = await MenuItem.findByIdAndDelete(id);

    if (!item) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    return res.status(204).send();
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
