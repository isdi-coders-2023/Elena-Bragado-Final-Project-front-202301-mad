import { useDispatch, useSelector } from "react-redux";
import { UserStructure } from "../models/user";
import { login, loginToken } from "../reducer/users/users.slice";
import { UsersRepo } from "../services/users/users.repo";
import { AppDispatch, RootState } from "../store/store";

export function useUsers(repo: UsersRepo) {
  const userState = useSelector((state: RootState) => state.userState);
  const dispatch = useDispatch<AppDispatch>();

  const userRegister = async (info: Partial<UserStructure>) => {
    try {
      await repo.create(info, "register");
      // dispatch(register(data.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const userLogin = async (userLogged: Partial<UserStructure>) => {
    try {
      const data: any = await repo.login(userLogged, "login");
      dispatch(loginToken(data.results[0]));
      localStorage.setItem("tokena", userState.token);
      dispatch(login(data.results[1]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    login,
    loginToken,
    userRegister,
    userLogin,
  };
}
