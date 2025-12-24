import Banner from "@/components/header/banner";
import Navbar from "@/components/header/navbar";

export default function Home() {
  return (
    <>
      <main className="max-w-[90vw] mx-auto">
        <header>
          <Navbar />
          <Banner />
        </header>
      </main>
    </>
  );
}
