import styles from "./page.module.css";
import { Macondo } from '@next/font/google';
const macondo = Macondo({
  subsets: ['latin'],
  weight: ['400'],
});
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={macondo.className}>Home</div>
    </div>
  );
}
