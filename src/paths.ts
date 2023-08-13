const PATHS = {
  HOME: '/',
  CREATE: '/create',
  POST: '/blog/:id',
};

const API_PATHS = {
  CREATE: '/users/:userId/create',
  POSTS: '/users/:userId/posts',
  POST: '/posts/:id',
  COMMENTS: '/posts/:postId/comments',
  REGISTER: '/users/register',
};

export { PATHS, API_PATHS };