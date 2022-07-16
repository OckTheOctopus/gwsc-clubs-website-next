import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';
import SideBar from '../components/SideBar.js';

export default function ContactUs() {
    return (
        <>
            <div>
            <Header />
            <NavBar />
            <div className="content">
                <div className='sidebar'>
                <SideBar />
                </div>
                <main>
                <p>This website was brought to you by the Chat for Change web development team.</p>
                <p>If you notice a mistake or have a suggestion reach out to us:</p>
                <p>Yaseen Ahmed: yaseen6607@yahoo.com</p>
                <p className="add-space">Ameera Merza: mer0006@gwsc.vic.edu.au</p>
                </main>
                </div>
            <Footer />
            </div>

            <style jsx>{`
                .add-space {
                    margin-bottom: 42vh;
                  }                  
            `}</style>
        </>
    );
}