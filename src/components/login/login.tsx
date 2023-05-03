import { SyntheticEvent, useMemo } from "react";
import { useUsers } from "../../hooks/useUsers";
import { UsersRepo } from "../../services/users/users.repo";
import { UserStructure } from "../../models/user";
import { Link, useNavigate } from "react-router-dom";
import { useProfessionals } from "../../hooks/useProfessionals";
import { ProfessionalsRepo } from "../../services/professionals/professional.repo";
import "./login.css";

export default function Login() {
  const repoUser = useMemo(() => new UsersRepo(), []);
  const repoProfessional = useMemo(() => new ProfessionalsRepo(), []);
  const { userLogin } = useUsers(repoUser);
  const { professionals } = useProfessionals(repoProfessional);

  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const userLogged: Partial<UserStructure> = {
      email: inputs[0].value,
      password: inputs[1].value,
    };

    userLogin(userLogged);
    // professionals();
    formData.reset();

    navigate("/professionals/add");
  };
  return (
    <div>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__forminput"
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
        />
        <input
          className="login__forminput"
          type="password"
          name="password"
          id="password"
          required
          placeholder="Password"
        />
        <button className="button__login" type="submit">
          Login
        </button>
        <div className="register__buttonregister">
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}
