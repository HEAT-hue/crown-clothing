// jshint esversion:6
import styled from "styled-components";

export const FormContainer = styled.form`
  display: inline-block;
  width: 100%;
`;

export const FormInput = styled.input`
  background-color: #fff;
  border: 1px solid rgb(107, 105, 105);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 90%;
  text-transform: none;
  height: 50px;
  width: 100%;
  margin-block: 10px;
  padding: 0 35px 0 35px;
  display: block;
`;

export const TextSm = styled.span`
  font-size: 85%;
  color: grey;
  text-decoration: underline;

  &:hover {
    color: rgb(68, 87, 174);
  }
`;

export const ButtonContainer = styled.div`
  margin-block: 15px;
`;

export const TextLg = styled.p`
  color: #3d3c3cfa;
`;
