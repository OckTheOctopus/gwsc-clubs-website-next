import Image from 'next/image';

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

// Assets
import TeaseSiblings_logo from '../../public/images/TeaseSiblings_logo.jpeg';

export default function TeaseSiblings() {
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
          <h1>Tease siblings</h1>
          <p>Club leader: Ema Ziizawa</p>
          <br/>

          <h2>What is the objective of Tease Siblings?</h2>
          <p>This club is competition of who have the best idea of teasing sibling.</p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p>They want to win prise and who ever join this can know the winning teasing trick for siblings.</p>
          <br/>

          <h2>What kind of people is Tease Siblings looking to recruit?</h2>
          <p>People who have siblings</p>
          <br/>

          <h2>What are some of the projects Tease Siblings has done in the past?</h2>
          <p>Tournament of mind , Melbourne uni maths research</p>
          <br/>

          <h2>What are some projects that Tease Siblings are working on?</h2>
          <p>Britain debate speech contest </p>
          <br/>

          <h2>Does Tease Siblings have plans for the future?</h2>
          <p>No</p>
          <br/>

          <h2>Contact:</h2>
          <p>Ema Niizawa - NII0006@gwsc.vic.edu.au</p>
          <br/>

          <Image
            src={TeaseSiblings_logo}
            alt="Tease Siblings logo"
            width='300'
            height='300'
          />

        </main>
        </div>
      <Footer />
    </div>
        </>
    );
}