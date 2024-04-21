import mongoose, { Schema } from 'mongoose'
import type { IMessage } from '../types/message';

const messageSchema = new Schema({
    content: {
      type: String,
      required: true,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: 'Conversation',
    },
    conversation: {
      type: Schema.Types.ObjectId,
      ref: 'Conversation',
    },
    groupId: {
      type: Schema.Types.ObjectId,
      ref: 'Group',
    },
    group: {
      type: Schema.Types.ObjectId,
      ref: 'Group',
    },
    createdAt: {
      type: String,
      required: true,
    },
  });

export const Message = mongoose.model<IMessage>('Message', messageSchema);