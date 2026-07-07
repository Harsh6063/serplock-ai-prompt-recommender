import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">

          {/* Left */}

          <div className="max-w-md">

            <Image
              src="/logo.jpg"
              alt="Serplock"
              width={50}
              height={20}
              className="mb-5"
            />

            <h2 className="text-xl font-bold text-slate-900">
              AI Prompt Recommendation Engine
            </h2>

            <p className="mt-3 leading-7 text-slate-500">
              A prototype demonstrating how AI can automatically
              analyze any website and recommend the highest-value
              AI Search prompts to track across ChatGPT, Gemini,
              Claude and Perplexity.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-4 font-semibold text-slate-900">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link
                href="/"
                className="text-slate-500 transition hover:text-[#2F6BFF]"
              >
                Home
              </Link>

              <a
                href="#features"
                className="text-slate-500 transition hover:text-[#2F6BFF]"
              >
                Features
              </a>

              <a
                href="#demo"
                className="text-slate-500 transition hover:text-[#2F6BFF]"
              >
                Demo
              </a>

            </div>

          </div>
         

          {/* Resources */}

          <div>

            <h3 className="mb-4 font-semibold text-slate-900">
              Resources
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <a
                href="https://www.serplock.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 transition hover:text-[#2F6BFF]"
              >
                <Globe size={16} />

                Serplock Website
              </a>

              <a
                href="https://github.com/Harsh6063"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 transition hover:text-[#2F6BFF]"
              >
                <FaGithub size={18} />



                Harsh6063
              </a>
               <a
                href="https://www.linkedin.com/in/harsh-arora-3557062b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 transition hover:text-[#2F6BFF]"
              >
               <FaLinkedin size={18} />

                Harsh Arora
              </a>

            </div></div>
 
          </div>
                

         
        {/* Bottom */}

        <div className="mt-14 border-t border-slate-200 pt-8">
  <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
    <p>
      © 2026 Harsh Arora. Built for the Serplock Founding Team Assignment.
    </p>

    <div className="flex flex-wrap items-center gap-2 text-slate-400">
      <span>Next.js</span>

      <span className="h-1 w-1 rounded-full bg-slate-300" />

      <span>TypeScript</span>

      <span className="h-1 w-1 rounded-full bg-slate-300" />

      <span>Tailwind CSS</span>

      <span className="h-1 w-1 rounded-full bg-slate-300" />

      <span>OpenAI</span>
    </div>
  </div>
</div>

</div>
    </footer>
  );
}