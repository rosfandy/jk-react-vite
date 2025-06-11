import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";
import { LogOut } from "lucide-react";

interface Props {
  title: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  description: string;
}

export function PromptModal({ children, title, description, footer }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4 py-2 border">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">{children}</div>
        <DialogFooter>
          <DialogClose asChild>{footer}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
