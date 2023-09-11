import style from "./BannerSection.module.scss";

export function BannerSection() {
  return (
    <section className={style.banner}>
      <div className={style.darkBackground}></div>
      <h1>Bloody Tree</h1>
      <h2>Sistema de Cálculo de Tipo Sanguíneo</h2>
    </section>
  );
}
