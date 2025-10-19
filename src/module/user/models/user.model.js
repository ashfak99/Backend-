import mongoose , {Schema} from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new Schema(
    {
        username : {
            type: String,
            required: true,
            unique: true,
        },
        email : {
            type: String,
            required: true,
            unique: true,
        },
        password : {
            type: String,
            required: true,
        },
        fullName : {
            type: String,
            required: true,
        },
        avatar : {
            type : String,
            required : true
        },
        refreshToken : {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre('save',function(next){
    if(!this.isModified('password'))  return next();
    this.password =  bcrypt.hashSync(this.password,10);
    next();
})

userSchema.methods.isPasswordValid = function(password){
    return bcrypt.compareSync(password,this.password);
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            username : this.username,
            email : this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRATION
        }
    )
}
    
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRATION
        }
    )
}


export const User = mongoose.model('User', userSchema);