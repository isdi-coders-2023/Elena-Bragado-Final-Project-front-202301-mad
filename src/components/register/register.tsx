import { SyntheticEvent, useMemo } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import { User } from "../../models/user";
import { UsersRepo } from "../../services/users/users.repo";

export default function Register() {
  const repo = useMemo(() => new UsersRepo(), []);
  const { userRegister } = useUsers(repo);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const newUser: Partial<User> = {
      email: inputs[0].value,
      password: inputs[1].value,
    };

    userRegister(newUser);
    formData.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="Password"
        />
        <button type="submit">Register</button>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
