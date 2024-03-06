import { Background } from '../../assets';
import {
  Banner,
  Conditions,
  FreeCasePromo,
  LiveDrop,
  NavBar,
  ServiceStats,
} from '../../common';

export const MainPage = () => {
  return (
    <>
      <Background />
      <NavBar />
      <LiveDrop />
      <Banner />
      <ServiceStats />
      <FreeCasePromo />
      <Conditions />
    </>
  );
};
