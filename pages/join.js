import Link from 'next/link';
import Image from 'next/image';

// Components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';
import SideBar from '../components/SideBar.js';

export default function JoinClub() {
    return (
    <>
      <Header />
      <NavBar />
      <div className="content">
        <div className="sidebar">
          <SideBar />
        </div>
          <main>
            <h1>Check out all of these clubs!</h1>

            <Link href='/clubs/chatforchange'>
                <a>
                    <figure>
                        <Image
                        src='/../public/images/ChatForChange_logo.jpeg'
                        alt="Chat for Change"
                        width='300'
                        height='300'
                        />
                        <figcaption>
                        Chat for change is a student-led club at Glen Waverley Secondary College <strong>dedicated</strong> to making a <strong>change</strong> in the wider community! We run every Tuesday lunchtime at MD17! Our projects recently have included the recycling program, the India COVID funding and the clubs support forum.
                        </figcaption>
                    </figure>
                </a>
            </Link>

            <Link href='/clubs/communityartscouncil'>
                <a>
                <figure>
                    <Image
                    src='/../public/images/CAC_logo.png'
                    alt="Community Arts Council"
                    width='300'
                    height='300'
                    />
                    <figcaption>
                    We aim to serve the community by promoting the arts and cultural diversity.
                    </figcaption>
                </figure>
              </a>
            </Link>

            <Link href='/clubs/dareadingclub'>
                <a>
                <figure>
                    <Image
                    src='/../public/images/DaReadingClub_logo.png'
                    alt="Da Reading Club"
                    width='300'
                    height='300'
                    />
                    <figcaption>
                    our club strives to give students a friendly and accepting environment to share book recommendations and simply read.
                    </figcaption>
                </figure>
              </a>
            </Link>

            <Link href='/clubs/dynamicdanceclub'>
                <a>
                <figure>
                    <Image
                    src='/../public/images/DynamicDanceClub_logo.png'
                    alt="Dynamic Dance Club"
                    width='300'
                    height='300'
                    />
                    <figcaption>
                    The Dynamics Dance Club is a place for students to showcase their talent or learn a new one, a place to find a passion, a place to connect with other students and most importantly a place for students to have fun.
                    </figcaption>
                </figure>
              </a>
            </Link>

            <Link href='/clubs/FCSC'>
                <a>
                    <figure>
                        <Image
                        src='/../public/images/FCSC_logo.png'
                        alt="Fundraising and Community Services Committee"
                        width='300'
                        height='300'
                        />
                        <figcaption>
                        The FCSC aims to raise awareness around the school about the poverty and mistreatment around the world and we strive to help people in need in any way we can. We partner up with non-profit organizations and help raise money and necessities for various charities such as the Red Cross, Salvation Army, Canteen, etc. In school, we organize events such as the World’s Greatest Shave, Athletics Carnival Stalls, some casual dress days and goods collection days to help other organizations.
                        </figcaption>
                    </figure>
              </a>
            </Link>

            <Link href='/clubs/LibraryAmbassadors'>
                <a>
                    <figure>
                        <Image
                        src='/../public/images/Libraryambassadors_logo.jpeg'
                        alt='Library Ambassadors'
                        width='300'
                        height='300'
                        />
                        <figcaption>
                        Our main objective in Library Ambassador is to find ways to make reading fun inorder to encourage people to enjoy reading more books of their choice. We also try to help others find the right book so they can escape into a perfect adventure without getting out of bed.
                        </figcaption>
                    </figure>
              </a>
            </Link>

            <Link href='/clubs/ModelUnitedNations'>
                <a>
                    <figure>
                        <Image
                        src='/../public/images/MUN_logo.png'
                        alt='Model United Nations'
                        width='300'
                        height='300'
                        />
                        <figcaption>
                        Model United Nations, also known as Model UN or MUN, is an extra-curricular activity in which students typically roleplay delegates to the United Nations and simulate UN committees. This activity takes place at MUN conferences, which is usually organized by a high school or college MUN club. At the end of most conferences, outstanding delegates in each committee are recognized and given an award certificate; the Best Delegate in each committee, however, receives a gavel.
                        </figcaption>
                </figure>   
                </a>
            </Link>

            <Link href='/clubs/roboticsclub'>
                <a>
                    <figure>
                        <Image
                        src="/../public/images/RoboticsClub_logo.png"
                        alt='Robotics Club'
                        width='300'
                        height='300'
                        />
                        <figcaption>
                        We compete in an international competition called <a style={{color: 'blue'}}target="_blank"href="https://www.robocupjunior.org.au/about-us/about-us/">RoboCup</a>, where we compete against students in a progressive way, beginning with Regional, then State, then Nationals, then hopefully, International.
                        </figcaption>
                    </figure> 
                </a>
            </Link>

            <Link href='/clubs/teasesiblings'>
                <a>
                    <figure>
                        <Image
                        src='/../public/images/TeaseSiblings_logo.jpeg'
                        alt='Tease Siblings'
                        width='300'
                        height='300'
                        />
                        <figcaption>
                        This club is competition of who have the best idea of teasing sibling.
                        </figcaption>
                    </figure>
                </a>
            </Link>

            <Link href='/clubs/techcrew'>
                <a>
                    <figure>
                        <Image
                        src='/../public/images/TechCrew_logo.png'
                        alt='Tech Crew'
                        width='300'
                        height='300'
                        />
                        <figcaption>
                        We help out with many school events behind the scenes; this includes photography, sound and lighting, stage managing and many other technical things. Our objective is to keep the technical side of events under control so events can run smoothly.
                        </figcaption>
                </figure>  
                </a>
            </Link>

            <Link href='/clubs/ViReal'>
                <a>
                    <figure>
                        <Image
                        src='/../public/images/ViReal_logo.jpg'
                        alt='ViReal'
                        height='300'
                        width='300'
                        />
                        <figcaption>
                        My objective is to help myself and others learn the power of editing and changing the looks of reality.
                        </figcaption>
                    </figure> 
                </a>
            </Link>

            <Link href='/clubs/Volleyballclub'>
                <a>
                    <figure>
                        <Image
                        src='/../public/images/VolleyballClub_logo.png'
                        alt='Volleyball Club'
                        width='300'
                        height='300'
                        />
                        <figcaption>
                        We play and practice volleyball mostly for fun.
                        </figcaption>
                    </figure> 
                </a>
            </Link>

          </main>
      </div>
      <Footer />

        <style jsx>{`
            a {
                color: black;
                text-decoration: none;
            }

              figure img {
                display: block
                margin-right: auto;
                margin-left: auto;
              }
              
              figure figcaption {
                text-align: center;
              }

              .sidebar {
                position: absolute;
                height: 100vh;
                width: 20%;
                background-color: #f1f1f1;
              }
              
        `}</style>
      </>
    );
}