import mongoose, { Schema } from "mongoose";
import type { IConversation } from "../types/conversation";

const conversationSchema: Schema<IConversation> = new Schema({
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],
    updatedAt: {
      type: String,
      required: true,
    },
  });

export const Conversation = mongoose.model<IConversation>('Conversation', conversationSchema)
  