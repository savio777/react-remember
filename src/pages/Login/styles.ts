import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 15px;

  color: #000;

  label {
    font-weight: bold;
  }

  input {
    border: 0.5px solid #ccc;
    margin-bottom: 15px;
  }
`;
