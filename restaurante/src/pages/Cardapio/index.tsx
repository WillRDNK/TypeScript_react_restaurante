import style from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "./Buscador";
import { useState } from "react";
export default function Cardapio() {
  const [busca, setBusca] = useState("");
  return (
    <main>
      <nav className={style.menu}>
        <Logo />
      </nav>
      <header className={style.header}>
        <div className={style.header__text}>Hamburgueria que vende massa</div>
      </header>

      <section className={style.cardapio}>
        <h3 className={style.cardapio__titulo}>Cárdapio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
      </section>
    </main>
  );
}
