import BookAppoint from "@/components/BookAppoint";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Testmonials from "@/components/Testmonials";
import WhatWeOffer from "@/components/whatWeOffer";
export default function Home() {
  return (
    <main >
      <Landing />
      <WhatWeOffer />
      <BookAppoint />
      <Testmonials />
      <Contact />
    </main>
  );
}
