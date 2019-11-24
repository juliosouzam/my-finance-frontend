import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;

  form {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 16px;
      font-weight: bold;
      margin: 20px 0 10px;
    }

    input {
      border: 1px solid #ccc;
      border-radius: 4px;
      height: 48px;
      padding: 0 20px;
      font-size: 16px;
      color: #666;

      &::placeholder {
        color: #999;
      }
    }

    select {
      height: 40px;
    }

    button {
      margin-top: 10px;
      border: 0;
      border-radius: 4px;
      height: 48px;
      font-size: 16px;
      background: rgba(0, 0, 0, 0.4);
      font-weight: bold;
      color: #fff;
      cursor: pointer;
    }
  }
`;
