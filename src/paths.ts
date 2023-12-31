const PATHS = {
  HOME: '/',
  CREATE: '/create/:id',
  POST: '/blog/:id',
  REGISTER: '/register',
  LOGIN: '/login',
};

const API_PATHS = {
  CREATE: '/users/:userId/create',
  POSTS: '/users/:userId/posts',
  ALL_POSTS: '/posts',
  POST: '/posts/:id',
  COMMENTS: '/posts/:postId/comments',
  REGISTER: '/users/register',
  LOGIN: '/users/login',
};

export { PATHS, API_PATHS };