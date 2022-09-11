import Image from 'next/image';

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

// Assets
import TechCrew_logo from '../../public/images/TechCrew_logo.jpg';

export default function TechCrew() {
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
          <h1>Tech Crew</h1>
          <p>Club leaders: Charlotte, Samyuktaa</p>
          <br/>

          <h2>What is the objective of the Tech Crew?</h2>
          <p>We help out with many school events behind the scenes; this includes photography, sound and lighting, stage managing and many other technical things. Our objective is to keep the technical side of events under control so events can run smoothly.</p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p>If they are interested in gaining more experience working with tecchnicial equipment, leadership, initiative and teamwork. It is also a great club to make new friends and learn new skills.</p>
          <br/>

          <h2>What kind of people is the Tech Crew looking to recruit?</h2>
          <p>Anyone is welcome!</p>
          <br/>

          <h2>What are some of the projects the Tech Crew have done in the past?</h2>
          <p>All school events (ie. School production, sport, music, fundraising)</p>
          <br/>

          <h2>What are some projects that the Tech Crew are working on?</h2>
          <p>Due to lockdown, we are working out ways to connect with all/most of tech crew. When we're back at school we are hoping to find ways to get involved in school activities</p>
          <br/>

          <h2>When are the meetings?</h2>
          <p>Variable</p>
          <br/>

          <h2>Where are the meetings held?</h2>
          <p>Hall, MD1, A1</p>
          <br/>

          <h2>Contact:</h2>
          <p>Liz Jenes - LJE@gwsc.vic.edu.au (Will begin accepting new recruits in 2022)</p>
          <br/>

          <Image
            src={TechCrew_logo}
            alt=""
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