import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Coworking from "./Coworking";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coworking Salta</title>
      </Head>
      <Coworking />
    </div>
  );
}
