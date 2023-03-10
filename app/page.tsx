import External from '@/components/External';
import Flag from '@/components/Flag';
import styles from '@/styles/page.module.css';

export default function Page() {
  return (
    <main className={styles.main} role="main">
      <section className={styles.content} role="contentinfo">
        <h1 className={styles.heading}>Hello&#46;</h1>
        <h2 className={styles.subheading}>My name is Joseph Chow&#46;</h2>
        <p className={styles.text}>
          I <strong className={styles.strong}>love</strong> developing for the
          web&#44; from crafting a simple HTML file to architecting complex{' '}
          <External href="https://nextjs.org/">Next&#46;js</External>{' '}
          applications&#46; The web offers a unique canvas for me to express my
          creativity and technical skills&#59; crafting captivating user
          interfaces is a source of immense gratification for me&#46;
        </p>
        <p className={styles.text}>
          As an ardent problem solver at heart&#44; I savor the challenge of
          transforming intricate UI/UX issues into accessible solutions that
          adhere to <External href="https://reactjs.org/">React</External>
          &#39;s best practices and SOLID principles&#46; There is no greater
          satisfaction for me than crafting an impression on a blank canvas or
          leaving a mark on a blank page&#46;
        </p>
        <p className={styles.text}>
          When I&#39;m not coding&#44; I dote on studying Mandarin{' '}
          <Flag src="https://flagcdn.com/cn.svg" alt="Chinese Flag" />
          &#44; Cantonese{' '}
          <Flag src="https://flagcdn.com/hk.svg" alt="Hong Kong Flag" />
          &#44; Vietnamese{' '}
          <Flag src="https://flagcdn.com/vn.svg" alt="Vietnamese Flag" />
          &#44; and French{' '}
          <Flag src="https://flagcdn.com/fr.svg" alt="French Flag" />
          &#46;
        </p>
        <p className={styles.text}>
          I am currently learning about{' '}
          <External href="https://preactjs.com/guide/v10/signals/">
            Signals
          </External>
          &#44; <External href="https://trpc.io/">tRPC</External>
          &#44; and <External href="https://threejs.org/">Three.js</External>
          &#46;
        </p>
        <p className={styles.text}>
          Don&#39;t be a stranger&#44; reach out and follow me on{' '}
          <External href="https://github.com/chowjiaming">GitHub</External>
          &#44;{' '}
          <External href="https://www.linkedin.com/in/chowjiaming/">
            LinkedIn
          </External>
          &#44;{' '}
          <External href="https://twitter.com/chowjiaming">Twitter</External>
          &#44; or email me at{' '}
          <External href="mailto:contact@josephchow.dev">
            contact@josephchow.dev
          </External>
          &#46;
        </p>
      </section>
    </main>
  );
}
