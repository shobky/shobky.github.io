import React from "react";
import Information from "@/components/information";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <div className=" max-w-[1800px] max-h-[800px] m-auto">
      <Information />
      <Portfolio />
    </div>
  );
}
