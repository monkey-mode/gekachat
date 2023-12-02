"use client";

import ListAccordion from "@/components/accordion/listaccordion";
import ChatCard from "@/components/card/chatcard";
import InfoCard from "@/components/card/infocard";

export default function Home() {
  return (
    // <div className=" min-[min-h-screen-64px]:">
    // </div>
    <main className="grid grid-cols-4 gap-4 px-10 md:px-24 xl:px-44 py-6 h-full">
      <ListAccordion />
      <ChatCard />
      <InfoCard />
    </main>
  );
}
