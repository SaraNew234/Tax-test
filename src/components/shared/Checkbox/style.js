import styled, { css } from "styled-components";
export const StyledItem = styled.div`
  padding: 0px 15px;
`;
export const StyledItemOption = styled.div`
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #374151;
    font-family: "Segoe UI" - 400;
  }
  display: flex;
  align-items: center;
  height: 20px;
  padding: 20px 5px;
  margin-bottom: 10px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? "#efefef" : "transparent"};
`;
