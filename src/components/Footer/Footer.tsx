import style from "./Footer.module.scss";

export function Footer() {
  return (
    <section className={style.footer} id="contato">
      <h2>Contato</h2>
      <p>Desenvolvido por Samuel Silva</p>
      <p>Desenvolvedor C#</p>
      <p>Graduando em Análise e Desenvolvimento de Sistemas na REGES RP</p>
    </section>
  );
}
