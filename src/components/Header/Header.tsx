import { formatDate } from '../../helpers/formatDate';
import styles from './style.module.css';
import {themeIcons} from "../../assets/index.ts";
import {useTheme} from "@/context/ThemeContext.tsx";

const Header = () => {
    const {isDark,toggleTheme}=useTheme()

  return (
    <header className={`${styles.header} ${isDark?styles.dark:styles.light}`}>
        <div className={styles.info}>
            <h1 className={styles.title}>NEWS</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
        </div>
        <img src={isDark?themeIcons.dark:themeIcons.light} width={30} alt="theme" onClick={toggleTheme}></img>

    </header>
  );
};
export default Header;
