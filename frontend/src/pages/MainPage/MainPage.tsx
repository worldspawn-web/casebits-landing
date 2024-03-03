import { Background } from '../../assets';
import { Banner, LiveDrop, NavBar, ServiceStats } from '../../common';

export const MainPage = () => {
  return (
    <>
      <Background />
      <NavBar />
      <LiveDrop />
      <Banner />
      <ServiceStats />
    </>
  );
};
