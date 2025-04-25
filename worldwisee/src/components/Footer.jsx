import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <footer>
        <p className={styles.copyright}>
          &copy; copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
