import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToolCard from "../components/ToolCard";

const CardsGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function Home({ selectedCategory, searchText }) {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setTools(data))
      .catch((error) => console.error("Erro ao carregar ferramentas:", error));
  }, []);

  const filteredTools = tools.filter((tool) => {
    const matchCategory =
      selectedCategory === "Todas" || tool.category === selectedCategory;
    const matchSearch = tool.name.toLowerCase().includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <CardsGrid>
      {filteredTools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}

      {filteredTools.length === 0 && (
        <p>Nenhuma ferramenta encontrada com os filtros atuais.</p>
      )}
    </CardsGrid>
  );
}

export default Home;
