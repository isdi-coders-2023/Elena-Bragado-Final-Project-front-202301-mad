import { ServerResponse, UserStructure } from "../../models/user";
import { RepoUser } from "./user.repo.interface";

export class UsersRepo implements RepoUser<ServerResponse> {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/users";
    // this.url = "https://homeclick.onrender.com/users";
  }

  async create(
    newUser: Partial<UserStructure>,
    urlExtraPath: string
  ): Promise<ServerResponse> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();

    return data;
  }

  async update(
    userInfo: Partial<UserStructure>,
    urlExtraPath: string,
    token: string
  ): Promise<ServerResponse> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(userInfo),
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();

    return data;
  }
  async login(
    userLogged: Partial<UserStructure>,
    urlExtraPath: string
  ): Promise<ServerResponse> {
    const url = this.url + "/" + urlExtraPath;
    console.log(url);
    console.log(userLogged);

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userLogged),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    console.log("token");
    console.log(data);

    return data;
  }
}
