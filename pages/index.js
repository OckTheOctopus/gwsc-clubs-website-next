import Link from 'next/link';
import Image from 'next/image';

// Components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';
import SideBar from '../components/SideBar.js';

// Images
import ChatForChange_logo from '../public/images/ChatForChange_logo.jpeg';
import TechCrew_logo from '../public/images/TechCrew_logo.jpg';
import FCSC_logo from '../public/images/FCSC_logo.png';

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="content">
        <div className="sidebar">
          <SideBar />
        </div>
          <main>
            <p>The official GWSC clubs website contains numerous clubs within GWSC to join. Browse through the website, pick a club you like and contact them to join!
            </p>
            <br />
            <h2>Suggested clubs:</h2>
            <div className='gallery'>
              <Link href='/clubs/ChatForChange'><a><Image className="gallery-image" src={ChatForChange_logo} alt="Chat for Change" width='300px' height='300px'/></a></Link>
              <Link href='/clubs/TechCrew'><a><Image className="gallery-image" src={TechCrew_logo} alt="Tech Crew" width='300px'height='300px'/></a></Link>
              <Link href='/clubs/FCSC'><a><Image className="gallery-image" src={FCSC_logo} alt="Fundraising and Community Services Comittee" width='300px' height='300px'/></a></Link>
            </div>
          </main>
      </div>
      <Footer />

      <style jsx>{`
        main {
          -ms-flex: 70%; /* IE10 */
          flex: 70%;
          background-color: white;
          padding: 20px;
          width: 80%;
          float: right;
          position: relative;
          margin-left: 250px;
        }
        
        .gallery {
          display: flex;
          flex-wrap: wrap;
        }
        
        .gallery-image {
          width: 300px;
          height: 300px;
        }
        
        .content {
        
        }
        
        .sidebar {
          position: absolute;
          height: 70vh;
          width: 20%;
          background-color: #f1f1f1;
        }
        
      `}</style>
    </>
  );
}