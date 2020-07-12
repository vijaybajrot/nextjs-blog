import Link from "next/link";
import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <h4>MyBlogs</h4>
      <ul className={styles.nav}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blogs">
            <a>Blogs</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return <div className={styles.mainFooter}>Developed by @vijaybajrot</div>;
};

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
