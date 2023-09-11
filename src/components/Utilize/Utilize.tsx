"use client";
import { useState } from "react";
import style from "./Utilize.module.scss";
import Image from "next/image";
import homem from "@/assets/img/homem.png";
import mulher from "@/assets/img/mulher.png";

export function Utilize() {
  const [formData, setFormData] = useState({
    tipoSanguineoPai: "",
    tipoSanguineoMae: "",
    fatorRhPai: false,
    fatorRhMae: false,
  });
  const [RhPai, setRhPai] = useState(true);
  const [RhMae, setRhMae] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMessage, setHasMessage] = useState(false);
  const [message, setMessage] = useState("Carregando...");

  async function criarNovoId() {
    setMessage("Carregando...");
    setIsLoading(true);
    const postURL = "http://127.0.0.1:7218/api/Membro";
    const postBody = {
      idMembro: 0,
      idPai: 0,
      idMae: 0,
      idIrmao: 0,
      idConjuge: 0,
      nome: "string",
      sobrenome: "string",
      grupoA: 0,
      grupoB: 0,
      grupoO: 0,
      grupoAB: 0,
      fatorRh: true,
      portadorNegativo: true,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    };
    try {
      const response = await fetch(postURL, options);
      const data = await response.json();
      return data.idMembro;
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);
      throw error;
    }
  }

  async function mostrarResultado(id: number) {
    const getURL = "http://localhost:7218/api/Membro/" + id;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(getURL);
    const response = await fetch(getURL, options);
    if (!response.ok) {
      setIsLoading(false);
      throw new Error(`Request failed with status: ${response.status}`);
    }
    setTimeout(async () => {
      console.log(response);
      const data = await response.json();
      console.log("GET Response:", data);
      const sangue = {
        rh: data.fatorRh,
        a: data.grupoA,
        b: data.grupoB,
        ab: data.grupoAB,
        o: data.grupoO,
      };
      console.log(sangue);
      if (sangue.rh) {
        const qualMensagem =
          "Seu sangue tem " +
          sangue.a * 100 +
          "% de chance de ser do tipo A+, " +
          sangue.b * 100 +
          "% de ser do tipo B+, " +
          sangue.ab * 100 +
          "% de ser do tipo AB+ e " +
          sangue.o * 100 +
          "% de chance de ser do tipo O+!";
        setMessage(qualMensagem);
      } else {
        const qualMensagem =
          "Seu sangue tem " +
          sangue.a * 100 +
          "% de chance de ser do tipo A-, " +
          sangue.b * 100 +
          "% de ser do tipo B-, " +
          sangue.ab * 100 +
          "% de ser do tipo AB- e " +
          sangue.o * 100 +
          "% de chance de ser do tipo O-!";
        setMessage(qualMensagem);
      }
      setIsLoading(false);
    }, 1000);
    setHasMessage(true);
  }

  async function calcularTipoSanguineo() {
    let id = await criarNovoId();
    const tipoSanguineoPai = formData.tipoSanguineoPai.trim();
    const tipoSanguineoMae = formData.tipoSanguineoMae.trim();
    const putURL =
      "http://localhost:7218/api/Membro/atualizarProbabilidades/" +
      id +
      "?tipoSanguineoPai=" +
      tipoSanguineoPai +
      "&tipoSanguineoMae=" +
      tipoSanguineoMae +
      "&fatorRhPai=" +
      formData.fatorRhPai +
      "&fatorRhMae=" +
      formData.fatorRhMae;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(putURL, options).catch(error => {
      setIsLoading(false);
      console.error("Error:", error);
    });
    setTimeout(() => {
      mostrarResultado(id);
    }, 1000);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calcularTipoSanguineo();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      fatorRhMae: RhMae,
      fatorRhPai: RhPai,
    });
  };

  return (
    <section className={style.utilize} id="utilize">
      <h2>Utilize</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        nam saepe dolor quibusdam molestiae non ratione odit placeat dolores
        dicta veritatis sunt numquam eius unde eos, voluptatem tempora ullam
        illo.
      </p>
      <form className={style.utilize__form} action="" onSubmit={handleSubmit}>
        <div className={style.utilize__separation}>
          <Image src={homem.src} width="50" height="50" alt="Homem" />
          <input type="text" name="tipoSanguineoPai" onChange={handleChange} />
          <input
            className={style.utilize__button}
            name="rhPai"
            type="button"
            value={RhPai ? "+" : "-"}
            onClick={() => {
              setRhPai(!RhPai);
              setFormData({
                ...formData,
                fatorRhPai: !RhPai,
              });
            }}
          />
        </div>
        <div className={style.utilize__separation}>
          <Image src={mulher.src} width="50" height="50" alt="Mulher" />
          <input type="text" name="tipoSanguineoMae" onChange={handleChange} />
          <input
            className={style.utilize__button}
            name="rhMae"
            type="button"
            value={RhMae ? "+" : "-"}
            onClick={() => {
              setRhMae(!RhMae);
              setFormData({
                ...formData,
                fatorRhMae: !RhMae,
              });
            }}
          />
        </div>
        <input type="submit" value="Calcular" />
      </form>
      <div
        className={style.loading}
        data-loading={isLoading}
        data-message={hasMessage}
      >
        <div className={style.loading__spin}></div>
        <p>{message}</p>
        <button onClick={() => setHasMessage(false)}>Ok</button>
      </div>
      <div
        className={style.loading__darkness}
        data-loading={isLoading}
        data-message={hasMessage}
      ></div>
    </section>
  );
}
