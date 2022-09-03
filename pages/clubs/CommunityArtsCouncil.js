import Image from 'next/image';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

// Images
import CAC_logo from '../../public/images/CAC_logo.png';
import CAC_1 from '../../public/images/CAC_1.JPG';
import CAC_2 from '../../public/images/CAC_2.JPG';
import CAC_3 from '../../public/images/CAC_3.JPG';
import CAC_4 from '../../public/images/CAC_4.JPG';

export default function CommunityArtsCouncil() {
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
                            <h1>Community Arts Council</h1>
                            <p>Club leader: Ali and Yasmeen</p>
                            <br/>

                            <h2>What is the objective of Club?</h2>
                            <p>We aim to serve the community by promoting the arts and cultural diversity.</p>
                            <br/>

                            <h2>Why should anybody join?</h2>
                            <p>Because we are a fun group of individuals who love to run events and contribute to our school&#39;s diversity</p>
                            <br/>

                            <h2>What kind of people is Club looking to recruit?</h2>
                            <p>We welcome people who are passionate to contribute to the community and create a fun and engaging environment outside studying.</p>
                            <br/>

                            <h2>What are some of the projects Club has done in the past?</h2>
                            <p>Culture Diversity Week, Valentine&#39;s Day, Arts Week, R U Ok Day contributions, Halloween, Glenny&#39;s Got Talent, many fundraisings </p>
                            <br/>

                            <h2>What are some projects that Club are working on?</h2>
                            <p>Creating new COVID friendly activities and also future projects like Refugee and Philosophy Day events</p>
                            <br/>

                            <h2>Does Club have plans for the future?</h2>
                            <p>To continue to support our culturally diverse community and promote student enjoyment and contribution in events and activities </p>
                            <br/>

                            <h2>When are the meetings?</h2>
                            <p>Wednesday lunchtimes </p>
                            <br/>

                            <h2>Where are the meetings held?</h2>
                            <p>A3</p>
                            <br/>

                            <h2>Contact:</h2>
                            <p>Mrs Culling MCU@gwsc.vic.edu.au</p>
                            <p>Ali Ramezaniotaghvar RAM0032@gwsc.vic.edu.au</p>
                            <p>Yasmeen Atieh ATI0001@gwsc.vic.edu.au</p>
                            <br/>

                            <div className="gallery">
                                <Image
                                    src={CAC_logo}
                                    alt="Community Arts Council logo"
                                    width="300px"
                                    height='300px'
                                />
                                <Image
                                    src={CAC_1}
                                    alt="Community Arts Council activity 1"
                                    width='300'
                                    height='300'
                                />
                                <Image
                                    src={CAC_2}
                                    alt="Community Arts Council activity 2"
                                    width='300'
                                    height='300'
                                />
                                <Image
                                    src={CAC_3}
                                    alt="Community Arts Council activity 3"
                                    width='300'
                                    height='300'
                                />
                                <Image
                                    src={CAC_4}
                                    alt="Community Arts Council activity 4"
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