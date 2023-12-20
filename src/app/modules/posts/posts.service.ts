import Post from './posts.model';

export const getPostsFromDB = async () => {
  const posts = await Post.find();
  return posts;
};
