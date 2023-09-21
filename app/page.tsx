import Image from 'next/image';
import styles from './page.module.css';
import { Htag } from './_components';
export default function Home() {
  return (
    <main>
      <Htag tag="h1">Привет</Htag>
      <Htag tag="h2">Привет</Htag>
      <Htag tag="h3">Привет</Htag>
    </main>
  );
}
