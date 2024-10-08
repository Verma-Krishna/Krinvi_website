const registerschema = require("../Models/AuthModel")


const Logincontroller = async(req,res)=>{
   const {email,password} = req.body

   try{
        const user = await registerschema.findOne({email})
        if(!user) {
            return res.status(400).json({message:'User not found'})
        }

        if(user.password !== password){
            return res.status(400).json({message:"Invalid Credentials"})
        }

        return res.status(200).send({message:"User successfully login",user})
   }
   catch(error){
      console.error("Login error",error)
      return res.status(500).json({message:"Internal Server error"})
   }
      
}


const Registercontroller = async(req,res)=>{
    try{
       const {email} = req.body
        const existingUser = await registerschema.findOne({ email });
        if(existingUser){
            return res.status(400).json({message:"User Email already registered"})
        }
        else{ 
            const data = await registerschema.create(req.body)
            return res.status(201).json({
                data,
                message:"User registered Successfully"
            })
        }
    }
    catch(error){
        console.log(error)
         return res.status(500).json({
            message:"Internal Server error",
            error
         })
    }

}



  


module.exports= {
    Registercontroller,
    Logincontroller
}