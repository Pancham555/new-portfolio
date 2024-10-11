import Hero from "@/components/hero";
import Latest from "@/components/latest";
import Navbar from "@/components/navbar";
import Recent from "@/components/recent";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto py-5 md:py-10 px-5">
      <Navbar />
      <div className="grid md:grid-cols-[7fr_3fr] gap-5">
        <Hero />
        <Recent />

        <div className="">
          <Latest />
        </div>
        <div className="">
          <Socials />
        </div>
      </div>
    </main>
  );
}
