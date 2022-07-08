import styled from "styled-components";

export const Visor = styled.input`
  width: 100%;
  background-color: var(--background);
  border: none;
  font-size: 46px;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  text-align: right;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  button {
    height: 60px;
    font-size: 20px;
    border: 1.5px solid var(--background);
  }

  button:nth-of-type(24) {
    background-color: var(--green-button);
    font-size: 32px;
    font-weight: 200;
  }
  button:nth-of-type(24):hover {
    background-color: #04bb63;
  }

  .num-button {
    background-color: var(--black-button);
    font-weight: 500;
  }

  .operation-button {
    background-color: var(--gray-button);
    font-size: 25px;
  }

  .func-button {
    background-color: var(--gray-button);
    font-size: 15px;
    font-weight: 200;
  }
  .num-button:hover,
  .operation-button:hover,
  .func-button:hover {
    background-color:  #505050;
  }
`;
