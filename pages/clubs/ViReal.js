import Image from 'next/image';

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

// Assets
import ViReal_logo from '../../public/images/ViReal_logo.jpg';

export default function ViReal() {
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
          <h1>ViReal</h1>
          <p>Club leader: Dhruv Nevrekar</p>
          <br/>

          <h2>What is the objective of ViReal?</h2>
          <p>My objective is to help myself and others learn the power of editing and changing the looks of reality.</p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p>I am sure most people want to look good in photos they post on the internet or social media.   I know that nothing is impossible with photoshop and effects. That&#39;s why everyone who is interested should join!</p>
          <br/>

          <h2>What kind of people are ViReal looking to recruit?</h2>
          <p>people who have the wants of changing reality and learning how to do things they have never before done.</p>
          <br/>

          <h2>What are some of the projects ViReal has done in the past?</h2>
          <p>I have assisted in tournaments and I have also done various different jobs in fundraisers and  other things like that (I have collected money for different events as well!).</p>
          <br/>

          <h2>What are some projects that ViReal are working on?</h2>
          <p>I am working on photoshopping something right now.</p>
          <br/>

          <h2>Does ViReal have plans for the future?</h2>
          <p>I am planning that when there is an event in the school or anywhere, we can make a video or something like that for them. If a price is included for doing so, we can give some to our school and donate some money as well.</p>
          <br/>

          <h2>Contact:</h2>
          <p>Dhruv Nevrekar: NEV0001@gwsc.vic.edu.au</p>
          <br/>

          <Image
            src={ViReal_logo}
            alt="ViReal logo"
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