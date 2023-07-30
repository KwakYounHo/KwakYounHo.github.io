import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 8vh;
  padding: 0 20px;
  text-align: center;
`

export const BlockQuote = styled.div`
  position: relative;
  font-family: 'Inter';
  font-weight: 400;
  max-width: 900px;
  align-self: center;
  background-color: white;
  border-radius: 25px;
`

export const QuoteH1 = styled.h1`
  position: relative;
  color: black;
  font-size: 1.5rem;
  margin: 0;
  padding: 25px;
  border: 2px solid #fff;
  border: 2px solid black;
  border-radius: 25px;
  &::after {
    content: "";
    position: absolute;
    border: 2px solid black;
    width: 60px;
    bottom: -60px;
    left: 50px;
    height: 60px;
    border-bottom: none;
    border-left: none;
    border-radius: 0 50px 0 0;
  }
  &::before {
    content: "";
    position: absolute;
    width: 80px;
    border: 6px solid white;
    bottom: -3px;
    left: 50px;
  }
`

export const QuoteH4 = styled.h4`
  position: relative;
  color: black;
  font-size: 1rem;
  line-height: 1.2;
  margin: 0;
  z-index: 1;
  &::first-letter {
    font-size: 1.75rem;
    font-weight: bold;
    color: #4e0303;
  }
`