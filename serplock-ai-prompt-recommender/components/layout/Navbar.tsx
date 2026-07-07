"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchCheck } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/30 bg-transparent backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.jpg"
    alt="Serplock"
    width={160}
    height={40}
    priority
    className="h-9 w-auto object-contain"
  />


          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Serplock
            </h1>

            <p className="-mt-1 text-xs text-slate-500">
              AI Prompt Recommender
            </p>
          </div>

        </Link>

        {/* Desktop Nav */}

        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition hover:text-[#2F6BFF]"
          >
            How it Works
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-slate-600 transition hover:text-[#2F6BFF]"
          >
            Features
          </a>

          <a
            href="#demo"
            className="text-sm font-medium text-slate-600 transition hover:text-[#2F6BFF]"
          >
            Demo
          </a>

        </nav>

        {/* CTA */}

        <Button
          size="lg"
          className="hidden md:flex"
        >
          Analyze Website
        </Button>

      </div>
    </header>
  );
}