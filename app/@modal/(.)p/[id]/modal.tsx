"use client";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  function onDismiss() {
    router.back();
  }

  return (
    <Dialog open={true} onOpenChange={onDismiss}>
      <X
        onClick={onDismiss}
        color="white"
        aria-label="Close"
        role="button"
        className="cursor-pointer pointer-events-auto w-8 h-8 absolute top-2 right-2 z-999 "
      />
      <DialogContent
        className="max-w-[70%] sm:max-w-[60%] md:max-w-[85%] 2xl:max-w-[1431px] p-0 border-0 focus:ring-0 rounded-md overflow-hidden"
        showCloseButton={false}
      >
        <DialogTitle className="hidden" />
        {children}
      </DialogContent>
    </Dialog>
  );
}
