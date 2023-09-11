import Figura1 from "@/assets/img/figura1.jpg";
import Image from "next/image";
import style from "./Sobre.module.scss";

export function Sobre() {
  return (
    <section className={style.sobre} id="sobre">
      <h2>Sobre o Projeto</h2>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eius
          iure impedit optio vitae quae atque, repellendus illum quisquam ut
          dicta harum. Nemo molestiae quasi nam, eveniet provident at iure! Ipsa
          eligendi dolorum eius culpa veniam nisi sint fuga reprehenderit
          perferendis id quisquam iste et ipsum illum eveniet, delectus omnis
          esse doloremque minus quia, vitae quaerat necessitatibus accusamus
          veritatis. Fuga. Impedit nobis maxime nulla non ducimus beatae
          voluptatem sunt illo, voluptatum aperiam fuga nostrum incidunt porro
          et commodi consequatur est?
        </p>
        <Image
          src={Figura1.src}
          width="300"
          height="500"
          alt="Mão segurando teste sanguíneo"
        ></Image>
      </article>
    </section>
  );
}
