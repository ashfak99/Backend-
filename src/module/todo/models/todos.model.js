import mongoose,{Schema} from 'mongoose';

const todoSchema = new Schema(
    {
        title : {
            type: String,
            required: true, 
        },
        description : {
            type: String,
        },
        userId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    },
    {
        timestamps: true
    }
);

export const Todo = mongoose.model('Todo',todoSchema);