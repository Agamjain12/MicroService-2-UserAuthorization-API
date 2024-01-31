const User = require("../Models/userModel");

const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(user["_id"]);
    return res.status(200).json(user["_id"]);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

const validateUser = async (req, res) => {
  try {
    const id = req.headers["auth"];

    console.log("id", id);

    if (!id) {
      return res.status(403).json({ message: "'auth' is required" });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    return res.status(200).json({ message: "User Validated" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  addUser,
  validateUser,
};
