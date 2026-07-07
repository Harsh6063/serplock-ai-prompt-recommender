"use client";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoadingButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function LoadingButton({
  loading,
  children,
  onClick,
}: LoadingButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={loading}
      className="
        h-12
        rounded-xl
        bg-[#2F6BFF]
        px-6
        font-semibold
        transition-all
        hover:bg-[#2158E8]
      "
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        children
      )}
    </Button>
  );
}