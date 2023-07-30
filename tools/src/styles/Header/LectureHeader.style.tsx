import React from "react";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  bottom: 0;
  color: white;
  background: rgb(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const HeaderImage = styled.img`
  vertical-align: middle;
  width: 100%;
  height: auto;
`

export const ContentH2 = styled.h2`
  font-size: 3.5rem;
  font-family: 'Inter';
  font-weight: 600;
`