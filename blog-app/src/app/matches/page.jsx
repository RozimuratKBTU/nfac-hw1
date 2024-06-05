import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex items-center justify-center p-4">
                <h1 className="text-3xl font-bold">Upcoming Matches</h1>
            </main>
            <Footer />
        </div>
    );
}

export default Page;
