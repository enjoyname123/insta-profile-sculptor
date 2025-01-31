import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface NotificationsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NotificationsDialog = ({ open, onOpenChange }: NotificationsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed right-[80px] top-[70px] w-[400px] bg-white rounded-xl shadow-lg transform-none translate-x-0 translate-y-0">
        <DialogHeader>
          <DialogTitle className="text-center border-b border-igborder pb-2">Notifications</DialogTitle>
          <DialogDescription className="pt-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-2 hover:bg-igbg rounded-lg cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-igseparator"></div>
                <p className="text-sm text-igtext">
                  <span className="font-semibold">user123</span> liked your photo.
                  <span className="text-iggray text-xs ml-2">2h</span>
                </p>
              </div>
              <div className="flex items-center gap-4 p-2 hover:bg-igbg rounded-lg cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-igseparator"></div>
                <p className="text-sm text-igtext">
                  <span className="font-semibold">another_user</span> started following you.
                  <span className="text-iggray text-xs ml-2">5h</span>
                </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};