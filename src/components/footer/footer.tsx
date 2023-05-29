import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./footer.module.scss";

export function Footer() {
  const email = useSelector(
    (state: RootState) => state.userState.userLogged.firstName
  );

  return (
    <footer className={styles.footer}>
      <address className={styles.address}>
        Projecto final Isdi Coders Elena Bragado
      </address>
      <div className={styles.div}>{email}</div>
    </footer>
  );
}
