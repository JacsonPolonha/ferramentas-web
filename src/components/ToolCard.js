import React from "react";
import styled from "styled-components";


const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  box-shadow: 0 2px 5px ${({ theme }) => theme.colors.cardShadow};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 10px ${({ theme }) => theme.colors.cardShadow};
  }
`;



function ToolCard({ tool }) {
  return (
    <Card>
      <h2>{tool.name}</h2>
      <p>{tool.description}</p>
      <a href={tool.url} target="_blank" rel="noopener noreferrer">
        Acessar Ferramenta
      </a>
    </Card>
  );
}

export default ToolCard;

