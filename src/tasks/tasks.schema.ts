import { Schema } from 'mongoose';

export const TaskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: ['completed', 'pending'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
});
