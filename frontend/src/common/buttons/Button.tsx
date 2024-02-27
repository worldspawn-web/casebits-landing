import styled from 'styled-components';

export const Button = styled.a<{ $big?: boolean; $secondary?: boolean }>`
  display: flex;

  justify-content: center;
  align-items: center;

  width: ${(props) => (props.$big ? '145px' : '129px')};
  height: ${(props) => (props.$big ? '48px' : '40px')};

  background-color: ${(props) => (props.$secondary ? '$cinder' : '$royal-blue')}

  color: $white;

  border-radius: 10px;
`;
