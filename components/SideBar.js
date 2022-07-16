import Link from 'next/link';


export default function SideBar() {
  return (
    <>
        <div>
            <h3>Check them out!</h3>
            <Link href='/'><a>Chat for Change</a></Link>
            <br />
            <Link href='/'><a>Community Arts Council</a></Link>
            <br />
            <Link href='/'><a>Tech Crew</a></Link>
            <br />
            <Link href='/'><a>FCSC</a></Link>
            <br />
            <Link href='/'><a>Robotics Club</a></Link>
        </div>
      <style jsx>{`
        a, a:visited {
            background-color: none;
            transition: 100ms all linear 150ms;
            color: black;
            text-decoration: none;
          }
        
    
          
          a:hover {
            color: blue;
          }  
      `}</style>
    </>
  );
}
