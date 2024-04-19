import AuroraHero from "@/components/heros/aurora";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar className="bg-transparent border-transparent text-background" />
      <AuroraHero />
      {/* <Footer /> */}
    </>
  );
}
