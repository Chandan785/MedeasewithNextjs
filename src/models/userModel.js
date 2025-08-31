import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  Firstname: {
    type: String,
    required: [true,"First name is required"],
  },
    Lastname: {
    type: String,
    required: [true, "Last name is required"],
    },  

    Username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    },


    Aadhar:{
    type: String,
    required: [true, "Aadhar number is required"],
    unique: true,
    // validate: {
    //   validator: function(v) {
    //     return /^\d{12}$/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid Aadhar number! It must be 12 digits long.`,
    // },
    },


    email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    // validate: {
    //   validator: function(v) {
    //     return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid email!`
    // },

    },


    password: {
    type: String,
    // validate: {
    //   validator: function(v) {
    //     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d] {6,}$/.test(v);
    //   },
    //   message:  ` is not a valid password! Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, and one number, `,
    // },
    // required: [true, "Password is required"],
    },

    isVarified: {
    type: Boolean,
    default: false,
    }, 
    

    // confirmPassword: {
    // type: String,
    // validate: {
    //   validator: function(v) {
    //     return this.password === v;
    //   },
    //   message: `Confirm password does not match the password!`
    // },
  
    // },

    forgotPasswordToken: {
    type: String,
    default: false,
    },

    forgotPasswordExpiry: {
    type: Date,
    default: null,
    },

    varifyToken: {
    type: String,
    default: null,
    },
    varifyTokenExpiry: {
    type: Date,
    default: null,
    },
    
       createdAt: {
        type: Date,
        default: Date.now,
        },
       updatedAt: {
        type: Date,
        default: Date.now,
        } 
})

const User = mongoose.models.users  || mongoose.model("users", userSchema);
export default User;