import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer>
                <Link href='/join'><a>Join a Club</a></Link>
                <br />
                <Link href='/contact'><a>Contact Us</a></Link>
            </footer>

            <style jsx>{`
                /* Footer */
                footer {
                  padding: 20px;
                  text-align: left;
                  background: #002266;
                  color: white;
                  width: 100%;
                  float: right;
                }
                
                footer a, footer a:visited {
                  background-color: none;
                  transition: 100ms all linear 150ms;
                  color: white;
                }
                
                footer a:hover {
                  color: red; /* Not too happy with the color, any suggestions? */
                }
                
            `}</style>
        </>
    );
}