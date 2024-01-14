import { Document } from 'mongoose';

export interface Task extends Document {
  readonly title: string;
  readonly description?: string;
  readonly status: 'completed' | 'pending';
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
