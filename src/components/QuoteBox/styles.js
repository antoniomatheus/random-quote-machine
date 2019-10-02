import styled from 'styled-components';
import { darken } from 'polished';

export const Box = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  width: 40%;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Quote = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const QuoteText = styled.p`
  font-size: 2rem;
  text-align: center;
  padding: 6px;
  color: ${props => props.color};
`;

export const QuoteSymbolLeft = styled.div`
  font-size: 2rem;
  color: ${props => props.color};
`;

export const QuoteSymbolRight = styled.div`
  font-size: 2rem;
  align-self: flex-end;
  color: ${props => props.color};
`;

export const Author = styled.p`
  margin: 15px;
  font-size: 1.5rem;
  color: ${props => props.color};
  font-style: italic;
`;

export const ShareButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ShareLink = styled.a.attrs({ type: 'button' })`
  background-color: ${props => props.backgroundColor};
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;

  &:hover {
    transition: all 0.2s;
    background-color: ${props => {
      const color = props.backgroundColor;
      return darken(0.1, color);
    }};
  }
`;
