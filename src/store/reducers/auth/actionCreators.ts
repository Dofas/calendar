import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IUser } from "../../../Models/IUser";
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types";

export const AuthActionCreator = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreator.setIsLoading(true));
        setTimeout(async () => {
          const response = await UserService.getUsers();
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );
          if (mockUser) {
            localStorage.setItem("auth", "true");
            localStorage.setItem("username", mockUser.username);
            dispatch(AuthActionCreator.setUser(mockUser));
            dispatch(AuthActionCreator.setIsAuth(true));
          } else {
            dispatch(AuthActionCreator.setError("Invalid username or pass"));
          }
          dispatch(AuthActionCreator.setIsLoading(false));
        }, 3000);
      } catch (e) {
        dispatch(AuthActionCreator.setError("Something went wrong"));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(AuthActionCreator.setUser({} as IUser));
        dispatch(AuthActionCreator.setIsAuth(false));
  },
};
