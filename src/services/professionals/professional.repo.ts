import { url_def } from "../../config";
import {
  professionalServerResponse,
  ProfessionalStructure,
} from "../../models/professional";
import { ServerResponse, UserStructure } from "../../models/user";

export class ProfessionalsRepo {
  url: string;
  constructor() {
    this.url = url_def;
    // this.url = "https://homeclick.onrender.com/users";
  }

  async readProfessionals(
    token: string,
    urlExtraPath: string
  ): Promise<professionalServerResponse> {
    const url = this.url + urlExtraPath;

    const resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();

    return data;
  }

  async readProffesionalById(
    token: string,
    urlExtraPath: string,
    id: string
  ): Promise<professionalServerResponse> {
    const url = this.url + urlExtraPath + "/" + id;

    console.log(url);

    const resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();

    return data;
  }

  async create(
    token: string,
    newProfessional: Partial<ProfessionalStructure>,
    urlExtraPath: string
  ): Promise<ServerResponse> {
    const url = this.url + urlExtraPath;
    console.log(url);

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newProfessional),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();

    return data;
  }

  async delete(token: string, id: string): Promise<void> {
    const url = this.url + "professionals/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
  }
}
