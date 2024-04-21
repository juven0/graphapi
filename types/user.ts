import type { IConversation } from "./conversation";
import type { IGroup } from "./group";

export type IUser =  {
    username: string;
    email: string;
    conversations: IConversation[];
    groups: IGroup[];
}