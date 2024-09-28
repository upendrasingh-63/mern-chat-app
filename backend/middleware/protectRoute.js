import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// Protect route middleware
const protectRoute = async (req, res, next) => {
    try {
        // Check if the token is in the cookies (assuming cookie-parser is used)
        const token = req.cookies.jwt; // Correct way to access cookies
        if (!token) {
            return res.status(401).json({ error: "Please login - unauthorized access" });
        }

        // Verify the token with the secret key
        const decoded = jwt.verify(token, process.env.SECRET_KEY); // Use verify instead of decode

        if (!decoded) {
            return res.status(401).json({ error: "Invalid token - unauthorized access" });
        }

        // Find the user by ID and exclude the password field
        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ error: "User does not exist - unauthorized access" });
        }

        // Attach the user to the request object
        req.user = user;

        // Call the next middleware
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;
