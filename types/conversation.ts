import type { IMessage } from "./message";
import type { IUser } from "./user";

export type IConversation = {
    participants: IUser[];
    messages: IMessage[];
    updatedAt: string;
  }
  