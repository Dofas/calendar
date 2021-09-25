import axios, { AxiosResponse } from "axios";
import { IUser } from "../Models/IUser";

export default class UserService {
    // static позволить визивати функцію без створення екземпляру
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>("./users.json");
  }
}
