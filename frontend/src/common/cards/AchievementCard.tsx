import styled from 'styled-components';
import { Lock } from '../../assets/icons/Lock';

const costIcon = './src/assets/icons/AchievementValue.png';

export const AchievementWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 224px;

  background-color: #222a68;
  color: $white;

  border-radius: 10px;

  padding: 20px;
`;

export const AchievementHeader = styled.h3`
  font-size: 16px;
`;

export const AchievementFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;
`;

export const AchievementValue = styled.span``;

export const AchievementCost = styled.span`
  font-size: 32px;

  margin-left: 7px;
`;

export const AchievementCard = (header: string, cost: string) => {
  return (
    <AchievementWrapper>
      <AchievementHeader>{header}</AchievementHeader>
      <AchievementFooter>
        <AchievementValue>
          <img src={costIcon} />
          <AchievementCost>{cost}</AchievementCost>
        </AchievementValue>
        <Lock />
      </AchievementFooter>
    </AchievementWrapper>
  );
};
