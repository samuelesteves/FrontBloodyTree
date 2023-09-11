import Image from "next/image";
import Logo from "@/assets/img/logo.png";
import style from "./Header.module.scss";

export function Header() {
  return (
    <header className={style.header}>
      <a href="#">
        <Image src={Logo.src} width="128" height="128" alt="Bloody Tree" />
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#tipos">Tipos</a>
        </li>
        <li>
          <a href="#alelos">Alelos</a>
        </li>
        <li>
          <a href="#utilize">Utilize</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
    </header>
  );
}
