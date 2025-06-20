import React, { useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { AppContainer, MainLayout } from "./components/AppLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [searchText, setSearchText] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header searchText={searchText} onSearch={setSearchText} />
        <MainLayout>
          <Aside
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
          <Home selectedCategory={selectedCategory} searchText={searchText} />
        </MainLayout>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;





