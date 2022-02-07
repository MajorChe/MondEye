import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MondEye</title>
        <meta name="description" content="Created by Next Framework" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to MondEye!</h1>

        <p className={styles.description}>
          Your next generation bug tracking application
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Sign In &rarr;</h2>
          </a>

          <a className={styles.card}>
            <h2>Register &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          Made by - MajorChe
        </a>
        <p>Copyright © 2022</p>
      </footer>
    </div>
  );
}
