import Image from 'next/image';

export default function Body() {
    return (
        <main className="bg-white text-black py-10">
            <div className="container mx-auto flex flex-col items-center gap-10">
                <Image src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" alt="Real Madrid Logo" width={200} height={200} className="rounded-full shadow-lg" />
                <h1 className="text-3xl md:text-5xl font-bold text-center">Welcome to the Real Madrid Blog</h1>
                <p className="text-center text-lg md:text-xl">
                    Dive into the latest news, match updates, and player insights from one of the most iconic football clubs in the world.
                </p>
            </div>
        </main>
    );
}
