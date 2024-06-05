import Link from 'next/link';

function Footer() {
    return (
        <footer className="bg-black p-6 text-white mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <Link className="hover:text-gray-400" href="https://www.realmadrid.com/">Official Site</Link>
                </div>

                <div>© 2024 Real Madrid Blog</div>
            </div>
        </footer>
    );
}

export default Footer;
