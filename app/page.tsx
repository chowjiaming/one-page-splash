import Link from 'next/link';
import styles from '@/app/page.module.css';

export default function Page() {
  return (
    <main className={styles.main} role="main">
      <section className={styles.content} role="contentinfo">
        <h1 className={styles.heading}>Hello&#46;</h1>
        <h2 className={styles.subheading}>My name is Joseph Chow&#46;</h2>
        <p className={styles.text}>
          I&#39;m a front end developer and I absolutely{' '}
          <strong className={styles.strong}>love</strong> building for the
          web&#46; From something as simple as a single HTML file &#8212; all
          the way to large{' '}
          <Link className={styles.link} href="https://nextjs.org/">
            Next&#46;js
          </Link>{' '}
          applications&#46;
        </p>
        <p className={styles.text}>
          A problem solver at heart&#44; I savor turning complex UI/UX problems
          into accessible solutions using{' '}
          <Link className={styles.link} href="https://reactjs.org/">
            React
          </Link>
          &#39;s declarative and component-based approach&#46; It is most
          satisfying for me creating an impression on an empty canvas&#44; to
          make a mark on an empty page&#46;
        </p>
        <p className={styles.text}>
          When I&#39;m not coding&#44; I dote on studying Mandarin&#44;
          Cantonese&#44; Vietnamese&#44; and French&#46;
        </p>
        <p className={styles.text}>
          I am currently learning about{' '}
          <Link
            className={styles.link}
            href="https://preactjs.com/guide/v10/signals/"
          >
            Signals
          </Link>
          &#44;{' '}
          <Link className={styles.link} href="https://trpc.io/">
            tRPC
          </Link>
          &#44; and{' '}
          <Link className={styles.link} href="https://threejs.org/">
            Three.js
          </Link>
          &#46;
        </p>
        <p className={styles.text}>
          Don&#39;t be a stranger&#44; reach out and follow me on{' '}
          <Link className={styles.link} href="https://github.com/chowjiaming">
            GitHub
          </Link>
          &#44;{' '}
          <Link
            className={styles.link}
            href="https://www.linkedin.com/in/josephchow/"
          >
            LinkedIn
          </Link>
          &#44;{' '}
          <Link className={styles.link} href="https://twitter.com/chowjiaming">
            Twitter
          </Link>
          &#44; or email me at{' '}
          <Link className={styles.link} href="mailto:contact@josephchow.dev">
            contact@josephchow.dev
          </Link>
          &#46;
        </p>
      </section>
    </main>
  );
}
