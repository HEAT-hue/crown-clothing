// jshint esversion:6

import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 230px;
  display: none;
`;

export const Img = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  margin-bottom: 5px;
`;


export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${Img} {
      opacity: 0.8;
    }

    ${ButtonContainer} {
      opacity: 0.85;
      display: flex;
    }
  }
`;


export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;



// export const Name = styled.span`
//   width: 23%;
// `;
