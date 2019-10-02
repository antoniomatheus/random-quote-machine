import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(90deg, #7159c1, #a559c1);
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
  bottom: 150px;
  padding: 8px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
`;
