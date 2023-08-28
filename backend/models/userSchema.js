import { Schema, model } from 'mongoose';
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    }
    ,
    work:{
        type: String,
        required: false
    },
    tokens:
    [
        {
            token : {
                type : String,
                required: true
            }
        }

    ]
})


//hashing the password
userSchema.pre('save', async function(next){
    //iska matlab BAS JAB BHI PASSWORD MEIN HARKAT AAYE TABHI CALL HOGA YEH
    //kind of like useEffect mein depedencies array
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword =await bcrypt.hash(this.cpassword, 12)
    }

//this function is a middle ware kaam hone ke baad we simply call req the next func
    next()
})

//generating token
//NOTE - THIS KEYWORD DOES NOT WORK WITH ARROW FUNCTIONS
userSchema.methods.generateAuthToken = async function() {
        try{
                
            //console.log("INSIDE GERNETATE TOKEN ", this)
            let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY)
            //adding new token to the tokens field in Schema
            console.log(token);
            this.tokens = this.tokens.concat({token: token});
            await this.save()
            console.log("now user is with the token", this)
            return token;
        }
        catch(err){
            console.log("JWT AUTH ERROR ", err);
        }
}

const User = model('USER', userSchema)

export default User;

