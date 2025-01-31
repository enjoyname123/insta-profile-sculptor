import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlusSquare } from "lucide-react";

interface NewPostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewPostDialog = ({ open, onOpenChange }: NewPostDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed right-[80px] top-[70px] w-[400px] bg-white rounded-xl shadow-lg transform-none translate-x-0 translate-y-0">
        <DialogHeader>
          <DialogTitle className="text-center border-b pb-2">Create New Post</DialogTitle>
          <DialogDescription className="text-center pt-12 pb-12">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-igbg flex items-center justify-center">
                <PlusSquare className="w-8 h-8 text-iggray" />
              </div>
              <p className="text-igtext">Drag photos and videos here</p>
              <button className="ig-button-primary">
                Select from computer
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};