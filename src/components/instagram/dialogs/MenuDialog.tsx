import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MenuDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MenuDialog = ({ open, onOpenChange }: MenuDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed right-[20px] top-[70px] w-[250px] bg-white rounded-xl shadow-lg transform-none translate-x-0 translate-y-0">
        <DialogHeader>
          <DialogTitle className="sr-only">Menu</DialogTitle>
          <DialogDescription>
            <div className="space-y-1">
              <button className="w-full text-left px-4 py-3 hover:bg-igbg rounded-lg text-igtext">
                Settings
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-igbg rounded-lg text-igtext">
                Saved
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-igbg rounded-lg text-igtext">
                Your activity
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-igbg rounded-lg text-igtext">
                Report a problem
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-igbg rounded-lg text-igtext">
                Switch accounts
              </button>
              <hr className="my-2 border-igborder" />
              <button className="w-full text-left px-4 py-3 hover:bg-igbg rounded-lg text-igtext">
                Log out
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};