const employeeService = require("../services/employee.service");

const getAllEmployees = async (req, res) => {
    try {
        const result = await employeeService.getAllEmployees();

        return res.status(result.status).json(result);
    } catch (error) {
        console.error("Get employees error:", error);

        return res.status(500).json({
            success: false,
            message: "Error fetching employees",
        });
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid employee ID",
            });
        }

        const result = await employeeService.getEmployeeById(id);

        return res.status(result.status).json(result);
    } catch (error) {
        console.error("Get employee by ID error:", error);

        return res.status(500).json({
            success: false,
            message: "Error fetching employee",
        });
    }
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
};