import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.main} role="main">
      <section className={styles.content}>
        <h1>Hello There.</h1>
        <h2>My name is Joseph Chow.</h2>
      </section>
    </main>
  );
}
