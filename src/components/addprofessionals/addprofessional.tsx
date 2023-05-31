import { SyntheticEvent, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import { ProfessionalStructure } from "../../models/professional";
import { UsersRepo } from "../../services/users/users.repo";
import "./addprofessional.css";
import { ProfessionalsRepo } from "../../services/professionals/professional.repo";
import { useProfessionals } from "../../hooks/useProfessionals";

export default function AddProfessional() {
  const repoProfessional = useMemo(() => new ProfessionalsRepo(), []);
  const { professionals, createProffesional } =
    useProfessionals(repoProfessional);
  const navigator = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;

    const inputs = formData.querySelectorAll("input");
    const selectors = formData.querySelectorAll("selector");

    const newProfessional: Partial<ProfessionalStructure> = {
      email: (formData[0] as HTMLFormElement).value,
      company: (formData[1] as HTMLFormElement).value,
      category: (formData[2] as HTMLFormElement).value,
      assessment: Number((formData[3] as HTMLFormElement).value),
      telephone: Number((formData[4] as HTMLFormElement).value),
      description: (formData[5] as HTMLFormElement).value,
      image:
        "https://www.freeiconspng.com/thumbs/smile-png/smile-png-photo-19.png",
      // image: (formData[6] as HTMLFormElement).value,
    };
    console.log(newProfessional);

    createProffesional(newProfessional);
    professionals();
    formData.reset();
    navigator("/professionals");
  };
  return (
    <div>
      <form className="register__form1" onSubmit={handleSubmit}>
        <input
          className="register__forminput"
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
        />
        <input
          className="register__forminput"
          type="company"
          name="company"
          id="company"
          required
          placeholder="Company"
        />
        <select
          className="register__forminput"
          name="category"
          id="category"
          required
          placeholder="Category"
          title="category"
        >
          <option>Carpenter</option>
          <option selected={true}>Category</option>
          <option>Electrician</option>

          <option>Plumber</option>
        </select>
        <input
          className="register__forminput"
          type="assessment"
          name="assessment"
          id="assessment"
          required
          placeholder="Assessment"
        />
        <input
          className="register__forminput"
          type="telephone"
          name="telephone"
          id="telephone"
          required
          placeholder="Telephone"
        />
        <input
          className="register__forminput"
          type="description"
          name="description"
          id="description"
          required
          placeholder="Description"
        />{" "}
        <input
          className="register__forminputfile"
          type="file"
          name="image"
          id="image"
          required
          placeholder="Image"
        />
        <button className="button__registerProfessional">
          {/* <Link to="/professionals">Add professional</Link> */}
          Add professional
        </button>
      </form>
    </div>
  );
}
