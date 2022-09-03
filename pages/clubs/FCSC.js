import Image from 'next/image';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

export default function Fcsc() {
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
          <h1>Fundraising and Community Services Committee</h1>
          <p>Club leader: Lavanya Sharma</p>
          <br/>

          <h2>What is the objective of the FCSC?</h2>
          <p>The FCSC aims to raise awareness around the school about the poverty and mistreatment around the world and we strive to help people in need in any way we can. We partner up with non-profit organizations and help raise money and necessities for various charities such as the Red Cross, Salvation Army, Canteen, etc. In school, we organize events such as the World’s Greatest Shave, Athletics Carnival Stalls, some casual dress days and goods collection days to help other organizations.</p>
          <br/>

          <h2>Why should anybody join?</h2>
          <p>Anyone who wishes to help others and reduce the effects of poverty should join our club as we strive to partner up with other organizations to aid people in need (sometimes animals too).</p>
          <br/>

          <h2>What kind of people is the FCSC looking to recruit?</h2>
          <p>We&#39;re looking for people who are passionate and willing when it comes to helping others. We need people who can give their time to the collective efforts of our committee and contribute to it with their ideas and hard-work. Therefore, it would be recommended that new recruits aren&#39;t in a lot of clubs as we need them to volunteer and help out at various times throughout the year at recess, lunchtime, afterschool and sometimes even on the weekends. </p>
          <br/>

          <h2>What are some of the projects the FCSC has done in the past?</h2>
          <p>In the past we have organized successful events such as the World&#39;s Greatest Shave, Anzac Appeal, Senior School Athletics Carnival, Women&#39;s Day, Cultural Diversity Week stalls, AFL Raffles and Casual Dress days.</p>
          <br/>

          <h2>What are some projects that the FCSC are working on?</h2>
          <p>Currently, we are working on organizing a casual dress day to support State School Relief Fund. We&#39;re also hoping to hold an Asylum Seeker&#39;s goods collection in collaboration with the Salvation Army to help raise goods and money to assist Asylum seekers in Australia.</p>
          <br/>

          <h2>Does the FCSC have plans for the future?</h2>
          <p>In October we&#39;ll be organizing the National Bandana Day event and selling bandanas to raise money for the charity Canteen and if COVID permits we will be going on a visit to the RSPCA to meet up with the animals they have and hopefully hold an event to raise money and/or goods for the organization.</p>
          <br/>

          <h2>When are the meetings?</h2>
          <p>Notified via email</p>
          <br/>

          <h2>Where are the meetings held?</h2>
          <p>MD1 (varies)</p>
          <br/>

          <h2>Contact:</h2>
          <p>Elizabeth Jenes - LJE@gwsc.vic.edu.au</p>
          <p>Miss Darougheh - EDA@gwsc.vic.edu.au</p>
          <br/>

          <div className='gallery'>
            <Image
              src='/../../public/images/FCSC_logo.png'
              alt="Fundraising and Community Service Committee logo"
              width='300px'
              height='300px'
            />
            <Image
              src='/../../public/images/FCSC_1.JPG'
              alt="Fundraising and Community Service Committee Activity 1"
              width='300'
              height='300'
            />
            <Image
              src='/../../public/images/FCSC_2.JPG'
              alt="Fundraising and Community Service Committee Activity 2"
              width='300'
              height='300'
            />
            <Image
              src='/../../public/images/FCSC_3.JPG'
              alt="Fundraising and Community Service Committee Activity 3"
              width='300'
              height='300'
            />
            <Image
              src='/../../public/images/FCSC_4.JPG'
              alt="Fundraising and Community Service Committee Activity 4"
              width='300'
              height='300'
            />
            <Image
              src='/../../public/images/FCSC_5.JPG'
              alt="Fundraising and Community Service Committee Activity 5"
              width='300'
              height='300'
            />
            <Image
              src='/../../public/images/FCSC_6.JPG'
              alt="Fundraising and Community Service Committee Activity 6"
              width='300'
              height='300'
            />
            <Image
              src='/../../public/images/FCSC_7.JPG'
              alt="Fundraising and Community Service Committee Activity 7"
              width='300'
              height='300'
            />
            <Image
              src='/../../public/images/FCSC_8.JPG'
              alt="Fundraising and Community Service Committee Activity 8"
              width='300'
              height='300'
            />
            <Image
              src='/../../public/images/FCSC_9.JPG'
              alt="Fundraising and Community Service Committee Activity 9"
              width='300'
              height='300'
            />
            <Image
              src='/../../public/images/FCSC_10.JPG'
              alt="Fundraising and Community Service Committee Activity 10"
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