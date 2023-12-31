import mongoose from 'mongoose';
import { z } from 'zod';
const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
});
export type Post = z.infer<typeof postSchema>;

// const postSchema = new mongoose.Schema({
//   id: {
//     type: Number,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },

// })
export const Posts = mongoose.model('posts');
