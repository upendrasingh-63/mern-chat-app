import Jwt from 'jsonwebtoken'

const generateTokenAndSendCookie = (userId, res) => {
    const token = Jwt.sign({ userId }, process.env.SECRET_KEY,
        {
            expiresIn: '15d'
        })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,//ms
        httpOnly: true, //prevent xss attacks
        sameSite: "strict", // prevent CSRF attacks
        secure:process.env.NODE_ENV!=="development"
        
    })
}

export default generateTokenAndSendCookie