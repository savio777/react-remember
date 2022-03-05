import { IUSer } from "../../interfaces/Users";

const initialState: IUSer = {
  email: undefined,
  id: undefined,
  logged: false,
};

const reducer = (state: IUSer = initialState, action: any) => {
  switch (action.type) {
    case "@USER/ADD":
      console.log("@USER/ADD", action);
      return { ...action.user, logged: true };
    case "@USER/REMOVE":
      console.log("@USER/REMOVE", action);
      return initialState;
    default:
      return state;
  }
};

export default reducer;
