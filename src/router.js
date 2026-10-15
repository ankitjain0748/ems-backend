const express = require("express");
const router = express.Router();

const employeeRoutes = require("./employee.routes");

// Register all routes
router.use("/employees", employeeRoutes);

module.exports = router;