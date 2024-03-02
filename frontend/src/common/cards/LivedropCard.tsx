import styled from 'styled-components';

export const LivedropCard = styled.div<{ $type?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 144px;
  min-height: 192px;

  width: 144px;
  height: 192px;

  background: ${(props) =>
    props.$type === 'legendary' &&
    'linear-gradient(0.35turn, #222a68, 90%, #f19a38)'};

  background: ${(props) =>
    props.$type === 'pink' &&
    'linear-gradient(0.35turn, #222a68, 90%, #ab67ed)'};

  background: ${(props) =>
    props.$type === 'blue' &&
    'linear-gradient(0.35turn, #222a68, 90%, #2887f7)'};

  border-radius: 16px;

  margin: 0 16px;
`;
