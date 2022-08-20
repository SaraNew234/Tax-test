import styled from "styled-components";

export const StyledButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    background-color: #e04d01;
    padding: 10px;
    border-radius: 4px;
    text-transform: capitalize;
    text-align: center;
    opacity: 0.8;
    transition: all 0.3s linear;
    margin-bottom: 25px;
    border: none;
    outline: none;
    font-weight: 200;
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
    font-family: "Segoe UI" - 400;
    font-style: normal;
  }
  button:hover {
    opacity: 1;
  }
`;
