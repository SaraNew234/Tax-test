import styled from "styled-components";

export const StyledFormItemInput = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  border: 1px solid #4c5f7a;
  border: 1px solid #d6d6d6;
  border: 1px solid #bcbcbc;
  border: ${({ error }) => (error ? "1px solid red" : "1px solid #bcbcbc")};
  width: fit-content;
  border-radius: 5px;
  padding: 10px;

  input {
    background-color: transparent;
    width: ${({ width }) => width && width}px;
    font-size: 14px 7px;
    font-weight: 500;
    border: none;
    outline: none;
    text-transform: capitalize;
  }
  @media only screen and (max-width: 800px) {
    input {
      width: ${({ mobile }) => mobile && mobile}px;
    }
  }
`;