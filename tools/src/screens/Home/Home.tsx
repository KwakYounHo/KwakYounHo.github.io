import React from "react";
import { Container } from "../../styles/Container/Container.style";
import {
  Header,
  MainHeader,
  HeaderTitle,
} from "../../styles/Header/Header.style";

interface HomeProps {}
const Home: React.FC<HomeProps> = () => {
  return (
    <Container>
      <Header>
        <MainHeader>
          <HeaderTitle>호옴</HeaderTitle>
        </MainHeader>
      </Header>
    </Container>
  );
};

export default Home;
