import styled from "styled-components";

export const Container = styled.div`
  max-width: 386px;
  height: 648px;
  margin: 100px auto;
  background: var(--background);
  display: block;
`;
export const Visor = styled.input`
  width: 99%;
  height: 202.05px;
  background-color: var(--background);
  border: none;
  font-size: 46px;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
  text-align: right;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Buttons = styled.div`
  padding: 5.06px;
  justify-content: space-between;
  button {
    height: 72.553px;
    width: 93.9px;
    border: none;
    left: 767.663px;
    top: 260.047px;
    font-size: 20px;
    border: 1.5px solid var(--background);
    
    
  }

  button:nth-of-type(24) {
    background-color: var(--green-button);
    /* font-size: 32px; */
    font-weight: 200;
  }
  button:nth-of-type(24):hover {
    background-color: #04bb63;
  }
  .num-button {
    background-color: var(--black-button);
    /* font-size: 20px; */
    font-weight: 600;
  }
  .num-button:hover {
    background-color: #757575;

  }

  .operation-button {
    background-color: var(--gray-button);
    /* font-size: 32px; */
    font-weight: 200;
  }

  .func-button {
    background-color: var(--gray-button);
    /* font-size: 15px; */
    font-weight: 200;
    display: inline-block;
  }

  .operation-button:hover, .func-button:hover {
    background-color: #4d4d51;
  }
`;
