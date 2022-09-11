import Link from 'next/link';

export default function NavBar() {
    return (
        <>
            <nav>
                <Link href='/' className='a'><a>Home</a></Link>
                <Link href='/clubs' className='a'><a>Join a club</a></Link>
                <Link href='/contact' className='a'><a>Contact us</a></Link>
            </nav>

            <style jsx>{`
                /* Style the top navigation bar */
                nav {
                  overflow: hidden;
                  background-color: #cc0000;
                  margin: 0;
                  padding-top: 10px;
                  padding-bottom: 10px;
                  display: flex;
                  justify-content: space-around;
                }
                
                nav a, nav a:visited {
                  overflow: hidden;
                  background-color: #cc0000;
                  text-decoration: none;
                  color: white;
                  font-weight: 500;
                  transition: 100ms all linear 150ms;
                }
                
                nav a:hover {
                  color: black;
                }
                
            `}</style>
        </>
    );
}