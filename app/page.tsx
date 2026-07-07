import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="grid-background min-h-screen">
      <Navbar />
      <Hero />
      <Footer></Footer>
    </main>
  );
}