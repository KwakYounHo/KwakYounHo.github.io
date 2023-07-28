import React from "react";
import styled from "styled-components";

export const Header = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    transform: scaleX(1.5);
    background-position: right top;
    background-size: 100vw 200px;
    background-color: #1a1d20;
  }
`;

export const MainHeader = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  max-width: 500px;
  background-color: transparent;
`;

export const HeaderTitle = styled.h1`
  font-family: "gugi";
  font-size: 5rem;
  color: white;
`;
