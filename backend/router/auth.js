import {Router} from 'express';
import jwt from 'jsonwebtoken';
const router = Router();//need to include a router for backend services
import  bcrypt from 'bcryptjs';
import authenticate from "../middleware/authenticate.js";


/*only difference between these methods when these were
in server.js and here is there we used app.get and app.post and all
here we shall use router.get and all
*/

//require('../db/conn')
import User from '../models/userSchema.js';

router.get('/', (req, res)=>{
    res.send("Home page from Router file ");
})

//jab bhi user se data chahiye hota h toh post use karte h

// 2 tarike h yeh karne ke using promises joki yeh wala h
//and async await jo iske baad h

// router.post('/register', (req, res)=>{

//     const {name, email, phone,password, work, cpassword}  = req.body

//     if(!name || !email || !phone || !password || !work || !cpassword){
//         return res.status(422).json({error:"Error missing fileds"})
//     }
    
//     //apne database mein hum dhuundh rahe h ki smiliar email h yaa nahi
//     //findOne method h mongoose ka first "email" db ka email h dusra wala jo abhi aaya h
//     User.findOne({email: email})
//     .then((userExists)=>{
//         if(userExists)
//             return res.status(422).json({error:"Email exists"})
    
//         const user = new User({name, email, phone,password, work, cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered succesfuuly"})
//         }).catch((err) => res.status(500).json({error:"Failed to register"}))
//     }).catch(err =>{console.log(err)})

// })


// AWAAIT CONCEPT
router.post('/register', async (req, res) =>{
    //console.log("DATAT HAS BEEN RECIEVED as", req.body)

    let {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email ||  !phone || !work || !password || !cpassword){
        console.log("Missing Field ")
        return res.status(422).json({error: "Missign fields "})
    }


    try{
        const userExists = await User.findOne({email: email})

        if(userExists)
            return res.status(422).json({error: "user alaready exists"})
    
        else if(password != cpassword)
            return res.status(422).json({error: "Password not matching"})
        
        else{
            const user = new User({name, email,phone, work, password, cpassword})
        
            //user instance banane se pehle 
            //we use middleware to hash the password

            /*if you are wondering ki bhai why cant we directly hash the pass here it is coz
            using schema middleware aligns with best practices for code organization, modularity, and separation of concerns. However, depending on your application's needs and architecture, you might choose either approach 
            */

            // const hashedPassword = await bcrypt.hash(password, 12);

            // // Create a new user with the hashed password
            // const newUser = new User({
            //     username,
            //     password: hashedPassword
            // });

            // const userRegister = await newUser.save()

            const userRegister = await user.save()
            //aur DB mein data save karne se pehle
            if(userRegister){
                console.log("After middleware ")
                res.status(201).json({message: `${user} Register Succesfully`}) 
                console.log(userRegister)
            }
            else
                res.status(422).json({error: "Failed to Register"})
    }

    }
    catch(err){
        console.log(err)
        res.status(422).json({error: "Error occucrred"});
    }
})


const middleware = (req, res, next)=>{
    console.log("MIddleWare ")
    next();
 }
  
 router.get('/', (req, res)=>{
    res.send("HOME PAGE ");
})

router.get('/contact', middleware, (req, res)=>{
    res.json({"message": "Contact PAGE "});
})


/*
About me kholne se pehle we need to pass thorugh a middleware which we confirm if the user is logged in
that will be checked with the help of jwt token
*/


router.post('/signin', async (req, res)=>{
    let token;

    //get the data from the  body
    const {email, password} = req.body

    if(!email || !password)
        return res.status(422).json({error:"missing field"})

    try{
    //recheck the data from the databse
    const checkUser = await User.findOne({email:email})

    if(checkUser){  
        //jab email sahi hoga tab cehck hoga password
        const checkPass = await bcrypt.compare(password, checkUser.password)

        //token is a basically a unique no which we need to authenticate a user after user has logged in
        //password hashing was only uptill login 

        token = await checkUser.generateAuthToken();
        //console.log(token)

        //creating a cookie after which token will be deated and user will logged out

        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 2589200000),
            httpOnly: true
        })

        //console.log("COOKIEE IS ", res.cookie("jwtoken"))


        //console.log("User details are ", checkUser)

        if(checkPass)
            res.status(201).json({msg:"welcome user "});
        else
            res.status(422).json({msg:"Wrong password "});
    }
    else
        res.status(422).json({message:"user not found Register now"})
    }
    catch(err){
        console.log(err)

    }
    
})

router.get('/signup', (req, res)=>{
    res.send({"message": " SIGNUP "});
})


router.get('/about', authenticate, (req, res)=>{
    res.cookie("TEST", "About me ");
    res.status(200).send(req.rootUser)
    //res.json({"message": "ABOUT PAGE "});
})

export default router;
