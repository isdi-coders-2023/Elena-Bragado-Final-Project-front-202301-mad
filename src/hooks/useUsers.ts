import { useDispatch, useSelector } from "react-redux";
import { UserStructure } from "../models/user";
import { login, register } from "../reducer/users/users.slice";
import { UsersRepo } from "../services/users/users.repo";
import { AppDispatch, RootState } from "../store/store";

export function useUsers(repo: UsersRepo) {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const userRegister = async (info: Partial<UserStructure>) => {
    try {
      const data = await repo.create(info, "register");
      dispatch(register(data.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const userLogin = async (info: Partial<UserStructure>) => {
    try {
      const data = await repo.create(info, "login");
      dispatch(login(data.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    users,
    userRegister,
    userLogin,
  };
}
