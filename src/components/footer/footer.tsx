import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./footer.module.scss";
import { url_def } from "../../config";

export function Footer() {
  const email = useSelector(
    (state: RootState) => state.userState.userLogged.firstName
  );

  return (
    <footer className={styles.footer}>
      <address className={styles.address}>
        Proyecto final Isdi Coders Elena Bragado
      </address>
      <div className={styles.div}>{email}</div>
      {/* <div>{"Server: " + url_def}</div> */}
    </footer>
  );
}
