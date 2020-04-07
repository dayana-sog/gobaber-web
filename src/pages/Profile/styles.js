import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  border: 10px outset #eee;
  padding: 50px;
  backdrop-filter: blur(5px);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: black;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(92, 92, 92, 1);
      }
    }

    span {
      color: #fff;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(120, 208, 211, 0.6);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #78d0d3;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 18px;

      &:hover {
        background: ${darken(0.05, '#78D0d3')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #403d52;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 18px;

    &:hover {
      background: ${darken(0.08, '#403d52')};
    }
  }
`;
