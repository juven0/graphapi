import type { IMessage } from "./message";
import type { IUser } from "./user";

export type IGroup = {
    name: string;
    members: IUser[];
    messages: IMessage[];
    updatedAt: string;
  }