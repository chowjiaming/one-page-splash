import {Red_Hat_Mono} from 'next/font/google';
// import styles from './page.module.css';

const inter = Red_Hat_Mono({subsets: ['latin']});

export default function Page() {
  return (
    <main className={inter.className}>
      <h1>Hello World!!</h1>
    </main>
  );
}
