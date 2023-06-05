// export type Category = "carpenter" | "electrician" | "plumber";
// export type Assessment = 1 | 2 | 3 | 4 | 5;

export type ProfessionalStructure = {
  id: string;
  email: string;
  company: string;
  category: string;
  assessment: number;
  telephone: number;
  description: string;
  image: string;
};

export type professionalServerResponse = {
  results: [];
};
