import { SyntheticEvent, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import { ProfessionalStructure } from "../../models/professional";
import { UsersRepo } from "../../services/users/users.repo";
import "./addprofessional.css";
import { ProfessionalsRepo } from "../../services/professionals/professional.repo";
import { useProfessionals } from "../../hooks/useProfessionals";

export default function AddProfessional() {
  const repo = useMemo(() => new UsersRepo(), []);
  const repoProfessional = useMemo(() => new ProfessionalsRepo(), []);
  const { userLogin } = useUsers(repo);
  const { professionals } = useProfessionals(repoProfessional);
  const navigator = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const newProfessional: Partial<ProfessionalStructure> = {
      email: inputs[0].value,
      company: inputs[1].value,
      assessment: inputs[2].valueAsNumber,
      telephone: inputs[3].valueAsNumber,
      description: inputs[4].value,
      image: inputs[5].value,
    };

    userLogin(newProfessional);
    professionals();
    formData.reset();
    navigator("/professionals");
  };
  return (
    <div className="register__back">
      <form className="register__form" onSubmit={handleSubmit}>
        <input
          className="register__forminputfile"
          type="file"
          name="image"
          id="image"
          required
          placeholder="Image"
        />

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
        />
        <div className="button__register">
          <Link to="/professionals">Add professional</Link>
        </div>
      </form>
    </div>
  );
}
