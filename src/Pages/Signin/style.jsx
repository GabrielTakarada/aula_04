import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center; 
    flex-direction: column;
    gap: 10px;
    height 100vh; 
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  aling-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 4px 7px 11px 6px #0003;
  border: 1px solid black;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  display: flex;

  a {
    text-decoration: none;
    cursor: pointer;
    color: #676767;

    &:hover {
      text-decoration: underline;
      color: blue;
    }
  }
`;
