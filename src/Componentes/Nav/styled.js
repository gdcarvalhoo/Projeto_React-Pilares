import styled from "styled-components";

export const NavContainer = styled.ul`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  min-width: 100vw;
  height: 15vh;
  padding: 10px;
  gap: 50px;
  border: 1px solid white;
  z-index: 1;
`;

export const NavContainerLateral = styled.ul`
  padding-top: 15vh;
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 10vw;
  border-right: 1px solid white;
`;

export const InputValue = styled.input`
  width: 80%;
  margin-top: 10px;
`;

export const Select = styled.select`
  width: 80%;
  margin-top: 10px;
  margin-bottom: 8vh;
`;

export const Logo = styled.div`
  color: white;
  text-align: center;
  min-width: 10vw;
  .imagemTexto {
    margin-top: 4px;
    height: 14vh;
    margin-right: 2vh;
    background-color: rgb(255, 255, 255, 0.5);
  }
`;

export const Ogarra = styled.img`
  max-height: 10vh;
`;

export const Buscador = styled.button`
  display: flex;
  margin-right: 20vw;
  padding: 5px;
  background-color: black;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: rgb(255, 255, 255, 0.01);
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-right: 20vw;
  background-color: rgb(255, 255, 255, 0.01);
  border: none;
  border-radius: 8px;
  :hover {
    transform: scale(1.2);
    background-color: #3366ff;
    color: white;
  }
`;

export const Ogarra2 = styled.img`
  max-height: 10vh;
  margin-left: auto;
  margin-right: 30vh;
`;

export const Button2 = styled.button`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-right: 2vw;
  background-color: rgb(255, 255, 255, 0.01);
  border: none;
  border-radius: 8px;
  :hover {
    transform: scale(1.2);
    background-color: #3366ff;
    color: white;
  }
`;
