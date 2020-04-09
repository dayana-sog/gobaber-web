import styled from 'styled-components';
import { darken } from 'polished';

import imageBack from '~/assets/gobarber.jpg';

export const Wrapper = styled.div`
  height: 100%;
  background-image: url(${imageBack});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 450px;
  text-align: center;
  border: 10px outset #eee;
  padding: 30px;
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
        background: ${darken(0.03, '#78D0d3')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
