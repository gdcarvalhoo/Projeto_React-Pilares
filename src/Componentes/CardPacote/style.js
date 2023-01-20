import styled from "styled-components";

export const Display = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
`;

export const CardContainer = styled.div`
  padding: 0 16px 16px 16px;
  min-width: 150px;
  max-width: 250px;
  border: solid white 3px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  margin: 10px;
  background: var(--card-background);
`;

export const Name = styled.h2`
  text-align: center;
  font-size: 1.2vw;
  align-content: auto;
  margin-top: 14px;
  color: var(--text);
`;

export const Button = styled.button`
font-size: 0.8vw;
  width: 6vw;
  height: 30px;
  border-radius: 16px;
  background-color: var(--main);
  border: none;
  color: var(--white);
  font-weight: bold;
  cursor: pointer;
}
:hover {
  border: 1px solid var(--main);
  background-color: var(--white);
  color: black;
}
`;

export const Descricao = styled.h4`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 1.6vh;
  margin-top: 12px;
  justify-content: center;
`;

export const Comprar = styled.div`
  margin-top: 50px;
`;

export const Image = styled.img`
  width: 10vw;
  border-radius: 12px;
  display: flex;
  align-content: center;
  margin: auto;
  
  }
`;
