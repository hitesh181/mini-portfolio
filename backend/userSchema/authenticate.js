import jwt from "jsonwebtoken"
import User from "../models/userSchema.js"

const authenticate = async (req, res, next)=>{
     try{
        const token = req.cookies.jwtoken
        console.log("Authenticating.....", token)
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        
        console.log("Verified Token ", verifyToken)

        const rootUser = await User.findOne({_id: verifyToken._id, "tokens.token" : token})
        
        if(!rootUser)
        throw new Error("User not found ")
        console.log("User found ",rootUser)

        req.token = token;
        req.rootUser = rootUser
        req.userId = rootUser._id
        //console.log("USER ID " , userId)
        next();
    }
    catch(err){
        res.status(401).json({msg:"Unauthorrized "})
        console.log(err)
    }   
    

}

export default authenticate
