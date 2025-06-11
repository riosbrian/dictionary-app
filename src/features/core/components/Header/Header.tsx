import Logo from '../../icons/Logo/Logo';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={`${styles.header} wrapper`}>
      <Logo width="2rem" height="2rem" />
      <p>Develop by Brian Rios</p>
    </header>
  );
}

export default Header;
