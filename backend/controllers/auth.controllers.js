import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import generateTokenAndSendCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        //check password
        if (password !== confirmPassword) {
            return res.status(400).json({ msg: "Passwords do not match" })
        }

        //check user is already present
        const user = await User.findOne({ username: username });
        if (user) {
            return res.status(400).json({ msg: "Username already exists" })
        }

        //Hash password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //set profile picture
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        //create new user
        const newUser = new User({
            fullName,
            username: username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            //Generate Jwt token
            generateTokenAndSendCookie(newUser._id, res);

            //save user to database
            await newUser.save();

            //return with new user details
            res.status(201).json({
                _id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).json({ msg: "Failed to create user" })
        }

    } catch (error) {
        res.status(500).json({ error })
        console.log("Error in signup controller", error.message)
    }
}



export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        //check hash password
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "")

        //if not present
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ msg: "Invalid username or password" })
        }

        //generate token
        generateTokenAndSendCookie(user.id, res)

        // return  user details
        res.status(200).json({
            _id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error) {
        res.status(500).json({ error })
        console.log("Error in login controller", error.message)
    }
}



export const logout = (req, res) => {
    try {
        //just clear cookie for logout
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ msg: "Logged out successfully" })
    } catch (error) {
        res.status(500).json({ error })
        console.log("Error in logout controller", error.message)
    }
}