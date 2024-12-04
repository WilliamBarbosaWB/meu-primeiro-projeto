import styled from "styled-components";

export const AddButton = styled.button`
  background-color: #ee82ee;
  color: #000;
  height: 35px;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Container = styled.div`
  background-color: #6a5acd;
  padding: 40px;
  border-radius: 10px;

  h1 {
    color: #fff;
  }

  input {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4ch;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  margin-top: 15px;
  padding: 0 10px;

  p {
    text-transform: capitalize;
    font-weight: bold;
  }
`;

export const TrashButton = styled.button`
  background-color: red;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  color: white;
`;
