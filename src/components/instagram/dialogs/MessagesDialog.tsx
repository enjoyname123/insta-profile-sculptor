import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MessagesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MessagesDialog = ({ open, onOpenChange }: MessagesDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed right-[80px] top-[70px] w-[400px] bg-white rounded-xl shadow-lg transform-none translate-x-0 translate-y-0">
        <DialogHeader>
          <DialogTitle className="text-center border-b border-igborder pb-2">Messages</DialogTitle>
          <DialogDescription className="pt-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-2 hover:bg-igbg rounded-lg cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-igseparator"></div>
                <div>
                  <p className="font-semibold text-sm text-igtext">user123</p>
                  <p className="text-iggray text-xs">Active 2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-2 hover:bg-igbg rounded-lg cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-igseparator"></div>
                <div>
                  <p className="font-semibold text-sm text-igtext">another_user</p>
                  <p className="text-iggray text-xs">Active 5m ago</p>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};