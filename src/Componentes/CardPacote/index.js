import React from "react";
import {
  Image,
  Button,
  CardContainer,
  Name,
  Comprar,
  Descricao,
  Display
} from "./style";

const Cardpacote = ({
  imagem,
  nome,
  subnome,
  descricao,
  preco,
  addCarrinho,
  item
}) => {
  return (
    <Display>
      <CardContainer>
        <Image src={imagem} />
        <Name>
          {nome}
          <br />
          {subnome}
        </Name>
        <Comprar>
          <Descricao>
            R$ {preco}
            <Button
              onClick={() => {
                addCarrinho(item);
              }}
            >
              Comprar
            </Button>
          </Descricao>
        </Comprar>
      </CardContainer>
    </Display>
  );
};

export default Cardpacote;
