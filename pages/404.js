import Link from 'next/link';

export default function FourOhFour() {
    return (
        <>
            <p>Uh oh, looks like the page you were looking for doesn&#39;t exist. Maybe try looking for it from the <Link href='/'><a>home page</a></Link>?</p>
            <style jsx>{`
                a {
                    color: blue;
                }
            `}</style>
        </>
    );
}