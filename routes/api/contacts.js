import { contacts } from "../../contacts.js";
import express from "express";

export const router = express.Router();


router.get("/", (req, res) => {
  res.json(contacts);
});

router.get("/:id", (req, res) => {
  res.json(contacts[0]);
});

router.post("/", (req, res) => {
  res.json(contacts[0]);
});

router.put("/:id", (req, res) => {
  res.json(contacts[0]);
});

router.delete("/:id", (req, res) => {
  res.json(contacts[0]);
});
