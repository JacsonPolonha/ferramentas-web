import React from "react";
import styled from "styled-components";


const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.headerFooterBg};
  color: ${({ theme }) => theme.colors.headerFooterText};
  padding: 10px;
  text-align: center;
`;


function Footer() {
  return (
    <FooterContainer>
      © 2025 - Ferramentas para Desenvolvedores Web - Desenvolvido por Jacson Polonha
    </FooterContainer>
  );
}

export default Footer;

