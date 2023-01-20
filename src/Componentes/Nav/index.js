import React, { useEffect, useState } from "react";
import {
  Button,
  Button2,
  NavContainer,
  Buscador,
  Ogarra,
  Ogarra2,
  Logo,
  NavContainerLateral,
  InputValue,
  Select
} from "./styled";
import ogarra from "../../img/OGARRA.png";
import logo from "../../img/logo.png";
import home from "../../img/home.png";
import carrinhologo from "../../img/carrinho.png";
import "./index.css";

const Nav = ({
  name,
  setName,
  subNome,
  setSubnome,
  page,
  setPage,
  setId,
  setVarMin,
  setVarMax,
  varMin,
  varMax,
  ordenacao,
  setOrdenacao
}) => {
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeSubNome = (e) => {
    setName(e.target.value);
  };

  const onChagePageCarrinho = () => {
    setPage(2);
  };

  const onChangeVarMin = (e) => {
    setVarMin(e.target.value);
  };

  const onChangeVarMax = (e) => {
    setVarMax(e.target.value);
  };

  const onChangeOrdancao = (e) => {
    setOrdenacao(e.target.value);
  };

  return (
    <div>
      <NavContainer className="topo">
        <Logo>
          <img className="imagemTexto" src={logo} />
        </Logo>
        <Ogarra src={ogarra} />
        <Buscador>
          <input
            type="text"
            className="centro"
            onChange={(e) => {
              onChangeSubNome(e);
            }}
            placeholder="Alien Remix: ... 🔎"
          />
        </Buscador>
        <Button
          onClick={() => {
            onChagePageCarrinho(2);
          }}
        >
          <img width="50px" height="50px" src={carrinhologo} />
        </Button>
      </NavContainer>

      <NavContainerLateral className="lateral">
        <br></br>
        <br></br>
        <InputValue
          type="number"
          onChange={(e) => {
            onChangeVarMin(e);
          }}
          placeholder="Valor Mínimo"
        />
        <InputValue
          type="number"
          onChange={(e) => {
            onChangeVarMax(e);
          }}
          placeholder="Valor Máximo"
        />

        <Select
          value={ordenacao}
          onChange={(e) => {
            onChangeOrdancao(e);
          }}
        >
          <option value="Ordenar">Ordenar</option>
          <option value="Crescente">Crescente</option>
          <option value="Decrescente">Decrescente</option>
        </Select>
      </NavContainerLateral>
    </div>
  );
};

export default Nav;

export const NavCarrinho = ({ setPage }) => {
  const onChagePageHome = () => {
    setPage(1);
  };

  return (
    <NavContainer>
      <Logo>
        <img className="imagemTexto" src={logo} />
      </Logo>
      <Ogarra2 src={ogarra} />
      <Button
        onClick={() => {
          onChagePageHome(1);
        }}
      ></Button>
      <Button2
        onClick={() => {
          onChagePageHome(1);
        }}
      >
        <img className="home" width="50px" height="50px" src={home} />
      </Button2>
    </NavContainer>
  );
};
