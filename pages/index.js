import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Reservas from "./Reservas";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coworking Salta</title>
      </Head>

      <Reservas />
    </div>
  );
}
