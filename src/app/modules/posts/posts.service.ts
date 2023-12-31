import { Posts } from './posts.model';

export const getPostsFromDB = async () => {
  const posts = await Posts.find();
  return posts;
};
