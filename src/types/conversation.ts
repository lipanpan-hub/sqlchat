import { Id, Timestamp } from ".";

export interface Conversation {
  id: string;
  connectionId?: Id;
  databaseName?: string;
  tableName?: string;
  assistantId: Id;
  title: string;
  createdAt: Timestamp;
}
