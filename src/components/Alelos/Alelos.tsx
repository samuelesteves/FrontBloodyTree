import Figura2 from "@/assets/img/figura2.jpg";
import Image from "next/image";
import style from "./Alelos.module.scss";

export function Alelos() {
  return (
    <section className={style.alelos} id="alelos">
      <h2>O que são alelos?</h2>
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
          src={Figura2.src}
          width="300"
          height="500"
          alt="Mão segurando teste sanguíneo"
        ></Image>
      </article>
    </section>
  );
}
