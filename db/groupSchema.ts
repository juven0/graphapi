import mongoose, { Schema } from "mongoose";
import type { IGroup } from "../types/group";

const groupSchema: Schema<IGroup> = new Schema({
    name: {
      type: String,
      required: true,
    },
    members: [
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

export const Group = mongoose.model<IGroup>('Group', groupSchema)