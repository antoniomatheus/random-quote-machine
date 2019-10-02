import styled from 'styled-components';
import { darken } from 'polished';

export const Box = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  width: 600px;
`;

export const Quote = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const QuoteText = styled.p`
  font-size: 30px;
  text-align: center;
  padding: 6px;
`;

export const QuoteSymbolLeft = styled.div`
  font-size: 36px;
`;

export const QuoteSymbolRight = styled.div`
  font-size: 36px;
  align-self: flex-end;
`;

export const Author = styled.p`
  margin: 30px;
`;

export const ShareButtons = styled.div``;

export const Button = styled.button.attrs({ type: 'button' })`
  background-color: #7159c1;
  color: #fff;
  font-weight: bold;
  padding: 8px;
  border: none;
  border-radius: 4px;

  &:hover {
    transition: all 0.2s;
    background-color: ${darken(0.1, '#7159c1')};
  }
`;
