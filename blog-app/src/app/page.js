
import Header from "@/app/components/layout/Header";
import Body from "@/app/components/layout/Body";
import Footer from "@/app/components/layout/Footer";

export default function Home(){
    return (
        <main className="flex flex-col h-screen">

            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </main>
    );
}
