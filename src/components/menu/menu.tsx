import { Link } from "react-router-dom";
import "./menu.css";

export type MenuOption = {
  label: string;
  path: string;
};
export const menuOptions: MenuOption[] = [
  { label: "Login", path: "/login" },
  { label: "Register", path: "/register" },
  { label: "Add Professional", path: "/professionals/add" },
  { label: "All Professionals", path: "/professionals" },
  { label: "Details", path: "/professionals/details" },
];

export type MenuProps = {
  options: MenuOption[];
};

export function Menu({ options }: MenuProps) {
  return (
    <div className="menu__container">
      <nav className="menu__nav">
        <ul className="menu__list">
          {menuOptions.map((item) => (
            <li
              key={item.label}
              className="menu__option menu__option_notSelected"
            >
              <Link
                to={item.path as string}
                className="menu__link"
                // style={(isActive) => ({
                //   color: isActive ? "white" : "white",
                // })}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}