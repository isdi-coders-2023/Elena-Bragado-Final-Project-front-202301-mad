import { ProfessionalStructure } from "../../models/professional";

export interface RepoProfessional<T> {
  read(
    professionalInfo: Partial<ProfessionalStructure>,
    urlPath: string,
    token: string
  ): Promise<T[]>;
  create(
    professionalInfo: Partial<ProfessionalStructure>,
    urlPath: string
  ): Promise<T>;
  update(
    professionalInfo: Partial<ProfessionalStructure>,
    urlPath: string,
    token: string
  ): Promise<T>;
  delete(id: ProfessionalStructure["id"]): Promise<void>;
}
