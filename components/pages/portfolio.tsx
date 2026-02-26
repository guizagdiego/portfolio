import Navbar from './sections/navbar';

const PortfolioPage = () => {
  return (
    <>
      <div className='no-scrollbar portfolio-container relative size-full snap-y snap-mandatory overflow-y-scroll'></div>
      <Navbar />
    </>
  );
};

export default PortfolioPage;
