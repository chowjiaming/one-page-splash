import Link from 'next/link';
import styles from '@/styles/external.module.css';

type Props = {
  href: string;
  children: React.ReactNode;
};
export default function External({href, children}: Props) {
  return (
    <Link
      className={styles.external}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
