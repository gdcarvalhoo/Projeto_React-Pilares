import React from "react";
import { FooterContainer, ImagemFooter } from "./styled";
import github from "../../img/github.png";

const Footer = () => {
  return (
    <FooterContainer>
      <div>Feito com ❤️ por Guilherme D.</div>
      <div>
        <a href="https://github.com/gdcarvalhoo" target="">
          <ImagemFooter src={github} />
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
