import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  font-size: 0.8rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.headerFooterBg};
  color: white;
  padding: 10px;
  text-align: center;
`;

const SearchInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 6px;
  margin-top: 10px;
`;

function Header({ searchText, onSearch }) {
  return (
    <HeaderContainer>
      <h1>Ferramentas para Desenvolvedores Web</h1>
      <SearchInput
        type="text"
        placeholder="Buscar ferramenta..."
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
      />
    </HeaderContainer>
  );
}

export default Header;
