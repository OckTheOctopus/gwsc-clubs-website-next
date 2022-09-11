import Image from 'next/image';

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

// Assets
import VolleyballClub_logo from '../../public/images/VolleyballClub_logo.png';
import isaac from '../../public/images/isaac.png';
import austin from '../../public/images/AustinL.png'
import joey from '../../public/images/joey.jpg';
import kyara from '../../public/images/kyara.png';

export default function VolleyballClub() {
    return (
        <>
         <div>
      <Header/>
      <NavBar/>
      <div className="content">
        <div className='sidebar'>
          <SideBar />
        </div>
        <main>
          <h1>Volleyball Club</h1>
          <p>Club leader: Austin Li</p>
          <br/>

          <h2>What is the objective of the Volleyball Club?</h2>
          <p>We play and practice volleyball mostly for fun.</p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p>If they want to play volleyball.</p>
          <br/>

          <h2>What kind of people is the Volleyball Club looking to recruit?</h2>
          <p>People who enjoy volleyball.</p>
          <br/>

          <h2>What are some of the projects the Volleyball Club has done in the past?</h2>
          <p>We play volleyball on the oval a lot.</p>
          <br/>

          <h2>Does the Volleyball Club have plans for the future?</h2>
          <p>Hopefully arrange some games and have more volleyball players.</p>
          <br/>

          <h2>Where are meetings held?</h2>
          <p>Outside the gym</p>
          <br/>

          <h2>Contact:</h2>
          <p>Austin Li, LI-0255@gwsc.vic.edu.au</p>
          <br/>

          <div className="gallery">
            <Image
              src={VolleyballClub_logo}
              alt="Volleyball club logo"
              width='300'
              height='300'
            />
            <Image
              src={isaac}
              alt="Isaac"
              width='300'
              height='300'
            />
            <Image
              src={austin}
              alt="Austin"
              width='300'
              height='300'
            />
            <Image
              src={joey}
              alt="Joey"
              width='300'
              height='300'
            />
            <Image
              src={kyara}
              alt="Kyara"
              width='300'
              height='300'
            />
          </div>

        </main>
        </div>
      <Footer />
    </div>
    <style jsx>{`
        .gallery {
            display: flex;
            flex-flow: row wrap;
        }

    `}</style>
        </>
    );
}