import Navbar from './../components/Navbar';
import Banner from './../components/Banner';
import Footer from './../components/Footer';


export default function Home() {
  return (
    <>
      <div >
        <div className='sticky top-0 z-[50]'>
          <Navbar />
        </div>  
        <div className=''>
          <Banner />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}
