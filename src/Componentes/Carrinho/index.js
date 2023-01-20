import React, { useEffect, useState } from "react";

import {
  Image,
  Button,
  CarrinhoContainer,
  BrinquedoNome,
  CarrinhoVazio,
  PacotesId,
  Preco,
  ValorTotal,
  Display,
  Remover,
  Titulo
} from "./style";

const Carrinho = ({
  lista,
  removeCarrinho,
  setLista,
  somarQuantidade,
  diminuirQuantidade
}) => {
  useEffect(() => {
    if (localStorage.getItem("carrinho")) {
      setLista(JSON.parse(localStorage.getItem("carrinho")));
    } else {
      localStorage.setItem("carrinho", JSON.stringify(lista));
    }
  }, []);

  const valorTotal = lista.reduce((a, c) => a + c.preco * c.quantidade, 0);
  const valorAjustado = valorTotal.toFixed(2);

  if (lista[0]) {
    return (
      <div>
        <Titulo align="center"> Carrinho de Compras</Titulo>
        {lista.map((item) => {
          return (
            <Display key={item.id}>
              <CarrinhoContainer>
                <Image src={item.image} />
                <BrinquedoNome>{item.subnome}</BrinquedoNome>
                <PacotesId>Quantidade: {item.quantidade}</PacotesId>
                <Remover>
                  <Preco>{item.preco}</Preco>

                  <Button
                    onClick={() => {
                      somarQuantidade(item);
                    }}
                  >
                    +
                  </Button>

                  <Button
                    onClick={() => {
                      removeCarrinho(item);
                    }}
                  >
                    Remover
                  </Button>

                  <Button
                    onClick={() => {
                      diminuirQuantidade(item);
                    }}
                  >
                    -
                  </Button>
                </Remover>
              </CarrinhoContainer>
            </Display>
          );
        })}
        <ValorTotal>{`Valor Total:   R$   ${valorAjustado}`}</ValorTotal>
      </div>
    );
  } else {
    return (
      <CarrinhoContainer>
        <CarrinhoVazio>ADICIONE ALGO AO CARRINHO</CarrinhoVazio>
      </CarrinhoContainer>
    );
  }
};

export default Carrinho;
