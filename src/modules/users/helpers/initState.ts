import State from "../types/State";

const initState = (): State => ({
  fetchState: "ready",
  users: null,
  userPreviews: null,
  usersCount: null,
  selectedUser: null,
  errorMessage: undefined,
});

export default initState;
