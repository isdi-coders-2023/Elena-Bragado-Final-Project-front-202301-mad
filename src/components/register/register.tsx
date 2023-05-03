import { SyntheticEvent, useMemo } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import { UserStructure } from "../../models/user";
import { UsersRepo } from "../../services/users/users.repo";
import "./register.css";
export default function Register() {
  const repo = useMemo(() => new UsersRepo(), []);
  const { userRegister } = useUsers(repo);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const newUser: Partial<UserStructure> = {
      email: inputs[0].value,
      password: inputs[1].value,
      firstName: inputs[2].value,
      lastName: inputs[3].value,
    };

    userRegister(newUser);
    formData.reset();
  };
  return (
    <div>
      <form className="register__form" onSubmit={handleSubmit}>
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
          type="password"
          name="password"
          id="password"
          required
          placeholder="Password"
        />
        <input
          className="register__forminput"
          type="firstName"
          name="firstName"
          id="firstName"
          required
          placeholder="First name"
        />
        <input
          className="register__forminput"
          type="lastName"
          name="lastName"
          id="lastName"
          required
          placeholder="Last name"
        />
        <button className="button__register" type="submit">
          Register
        </button>
        <div className="register__buttonlogin">
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
