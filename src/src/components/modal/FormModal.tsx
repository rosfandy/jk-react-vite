import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type React from "react";

interface Props {
  title: string;
  description?: string;
  action: string;
  children?: React.ReactNode;
}

export function FormModal({
  children,
  title,
  description = "",
  action,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4 py-2 border">{action}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
