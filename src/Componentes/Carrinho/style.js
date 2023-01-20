import styled from "styled-components";

export const Display = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CarrinhoContainer = styled.div`
  padding: 0px;
  min-width: 70vw;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 10px;
  color: #ffffff;
  background-color: rgb(255, 255, 255, 0.3);
`;

export const BrinquedoNome = styled.h3`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: center;
  margin: 10px;
`;

export const Titulo = styled.h3`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 25px;
  padding: 20px;
  color: white;
  background-color: rgb(255, 255, 255, 0.3);
`;

export const ValorTotal = styled.h3`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 25px;
  padding: 20px;
  color: white;
  font-weight: bold;
  background-color: rgb(255, 255, 255, 0.3);
`;

export const Preco = styled.h4`
  font-size: 18px;
  padding: 5px;
  background-color: white;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: black;
  display: flex;
  margin-bottom: auto;
  font-weight: bold;
`;

export const PacotesId = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin: 10px;
`;

export const CarrinhoVazio = styled.div`
  margin-bottom: 52px;
  margin: 20px;
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 8px;
  margin-left: 20px;
  background-color: var(--main);
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  :hover {
    transform: scale(1.1);
    background-color: var(--main);
    color: white;
  }
`;

export const Remover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
  justify-items: baseline;
  margin: 5px;
`;

export const Descricao = styled.h4`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0em;
  text-align: justify;
  color: black;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  height: 100px;
  margin-bottom: auto;
  width: auto;
  border-radius: 12px;
  margin: 10px;
`;
