import Link from 'next/link';

function Header() {
    return (
        <header className="bg-black p-5 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg md:text-2xl font-bold">Real Madrid Blog</h1>
                <nav className="flex gap-5 text-sm md:text-lg">
                    <Link className="hover:text-gray-400" href="/">Home</Link>
                    <Link className="hover:text-gray-400" href="/news">News</Link>
                    <Link className="hover:text-gray-400" href="/matches">Matches</Link>
                    <Link className="hover:text-gray-400" href="/team">Team</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
