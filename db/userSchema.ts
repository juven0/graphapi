import mongoose, { Schema } from 'mongoose'
import type { IUser } from '../types/user';

const UserSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
      },
    conversations: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Conversation',
        },
      ],
      groups: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Group',
        },
      ],
})
export const User = mongoose.model<IUser>('User', UserSchema);