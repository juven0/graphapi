import type { IConversation } from "./conversation";
import type { IGroup } from "./group";
import type { IUser } from "./user";

export type IMessage = {
    content: string
    senderId: string
    sender: IUser;
    conversationId: string
    conversation: IConversation;
    groupId: string
    group: IGroup;
    createdAt: string;
  }