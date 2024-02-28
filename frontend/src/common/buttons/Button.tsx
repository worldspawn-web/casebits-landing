import styled from 'styled-components';

export const Button = styled.a<{ $big?: boolean; $secondary?: boolean }>`
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 10px 24px;

  height: ${(props) => (props.$big ? '48px' : '40px')};

  background-color: ${(props) => (props.$secondary ? '#040305' : '#574ae2')};

  color: $white;

  border-radius: 10px;
`;
