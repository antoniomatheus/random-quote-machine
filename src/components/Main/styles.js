import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: ${props =>
    `linear-gradient(-45deg, ${props.leftColor}, ${props.rightColor})`};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  bottom: 10%;
  padding: 10px;
  font-size: 1.5rem;
  background-color: #fff;
  color: ${props => props.color};
  border: none;
  border-radius: 4px;

  &:hover {
    transition: all 0.2s;
    background-color: ${darken(0.1, '#fff')};
  }
`;
