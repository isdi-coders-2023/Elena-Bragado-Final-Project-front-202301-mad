export type UserStructure = {
  email: string;
  password: string;
};

export type ServerResponse = {
  results: UserStructure[];
};

export class User implements UserStructure {
  constructor(
    public id: string,
    public email: string,
    public password: string
  ) {}
}
