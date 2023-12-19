import { z } from 'zod';
const postScheme = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
});
type Post = z.infer<typeof postScheme>;

const post = {
  id: 1,
  title: 'Bangladesh',
  description: 'Bangladesh is a riverine country',
};
console.log(postScheme.parse(post));

export default Post;
