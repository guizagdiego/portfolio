import { BackgroundNoise } from '../shared/backgrounds';
import Navbar from './sections/navbar';

const PortfolioPage = () => {
  return (
    <>
      <div className='no-scrollbar portfolio-container relative size-full snap-y snap-mandatory overflow-y-scroll'>
        <BackgroundNoise className='z-50' />

        <Navbar />
      </div>
    </>
  );
};

export default PortfolioPage;
