import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AsideContainer = styled.aside`
  width: 200px;
  background-color: #f4f4f4;
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 10px;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-220px")};
    transition: left 0.3s ease;
    height: 100vh;
    z-index: 1500;
    box-shadow: ${({ isOpen }) => (isOpen ? "2px 0 5px rgba(0,0,0,0.3)" : "none")};
  }
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  z-index: 1000;
`;

const CategoryButton = styled.button`
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  cursor: pointer;
  border: none;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.categoryActiveBg : "#ddd"};
  color: ${({ active, theme }) =>
    active ? theme.colors.categoryActiveText : "#000"};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.buttonHoverBg : "#ccc"};
  }
`;

const ToggleButton = styled.button`
  display: none;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 2000;
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Aside({ selectedCategory, onCategorySelect }) {
  const [categories, setCategories] = useState(["Todas"]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(["Todas", ...uniqueCategories]);
      })
      .catch((error) => console.error("Erro ao carregar categorias:", error));
  }, []);

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
    setIsOpen(false); // Fecha o menu ao escolher uma categoria no mobile
  };

  return (
    <>
      {/* Botão de abrir/fechar Aside no Mobile */}
      <ToggleButton onClick={() => setIsOpen(true)}>☰ Categorias</ToggleButton>

      {/* Fundo escuro quando o menu estiver aberto */}
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <AsideContainer isOpen={isOpen}>
        <h3>Filtrar por Categoria</h3>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            onClick={() => handleCategoryClick(category)}
            active={selectedCategory === category}
          >
            {category}
          </CategoryButton>
        ))}
      </AsideContainer>
    </>
  );
}

export default Aside;

