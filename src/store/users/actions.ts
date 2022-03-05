interface IUSerAddUSer {
  email?: string;
  id?: string;
}

export const addUser = (user: IUSerAddUSer) => ({
  type: "@USER/ADD",
  user,
});

export const removeUser = () => ({
  type: "@USER/REMOVE",
});
