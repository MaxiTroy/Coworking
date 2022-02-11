import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PrincipalPage from "./PrincipalPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coworking Salta</title>
      </Head>

      <PrincipalPage />
    </div>
  );
}
