import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./header.module.scss";
import { Navbar } from "../navbar/navbar";

export function Header() {
  const usersState = useSelector((state: RootState) => state.userState);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <img src="../../../logo.png" alt="logo" />
        <div className={styles.title_container}>
          <h1>HomeClick!</h1>
          <p>Facility servicies</p>
          {usersState.userLogged && (
            <div className="navbar">
              <Navbar />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
