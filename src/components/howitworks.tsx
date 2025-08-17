'use client';
import { HoverEffect } from "./ui/card-hover-effect";

  function CardHoverEffectDemo() {
  return (
    <section>
         <h1 className="text-3xl font-bold text-center text-blue-600 mb-0">
                How It Works
        </h1>
         <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </section>
   
  );
}
export const projects = [
  {
    title: "Step 1: Register",
    description:
      "Create an account and link your ABHA ID or other medical identifiers.",
    link: " ",
  },
  {
    title: "Step 2: Connect",
    description:
      "Authorize hospitals or clinics to upload your records to our platform.",
    link: " ",
  },
  {
    title: "Step 3: Access",
    description:
      "View, download, and share your medical reports securely anytime.",
    link: " ",
  }
  
];

export default CardHoverEffectDemo;