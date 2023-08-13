import { User } from '@/classes/User';

export const getUser = () => {
  const user = {
    username: localStorage.getItem('username') || undefined,
    usertag: localStorage.getItem('usertag') || undefined,
    id: localStorage.getItem('id') || undefined,
  };

  if (!user.username || !user.usertag || !user.id) {
    return;
  }

  return new User(user);
};
