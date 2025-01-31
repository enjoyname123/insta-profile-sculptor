import { Search, Heart, Menu, MessageCircle, PlusSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const Header = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleNewPost = () => {
    setShowNewPost(true);
    toast({
      title: "Create New Post",
      description: "Share photos and videos with your followers",
    });
  };

  const handleLike = () => {
    setShowNotifications(true);
    toast({
      title: "Activity Feed",
      description: "See all your notifications and activity",
    });
  };

  const handleMessage = () => {
    setShowMessages(true);
    toast({
      title: "Direct Messages",
      description: "Send private messages to your friends",
    });
  };

  const handleMenu = () => {
    setShowMenu(true);
    toast({
      title: "Menu Options",
      description: "Access settings, saved posts, and more",
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[60px] bg-white border-b border-igborder z-50">
        <div className="max-w-[975px] h-full mx-auto px-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="Instagram"
              className="h-[29px]"
            />
          </div>
          
          {!isMobile && (
            <div className="flex-1 max-w-[268px] mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-igbg rounded-lg py-1 px-4 pl-10 text-sm border border-igborder focus:outline-none focus:border-iggray"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-iggray" />
              </div>
            </div>
          )}

          <div className="flex items-center gap-5">
            <PlusSquare 
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" 
              onClick={handleNewPost}
            />
            <Heart 
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" 
              onClick={handleLike}
            />
            <MessageCircle 
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" 
              onClick={handleMessage}
            />
            <Menu 
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" 
              onClick={handleMenu}
            />
          </div>
        </div>
      </header>

      {/* New Post Dialog */}
      <AlertDialog open={showNewPost} onOpenChange={setShowNewPost}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create New Post</AlertDialogTitle>
            <AlertDialogDescription>
              Drag photos and videos here or click to select from your computer.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>

      {/* Notifications Dialog */}
      <AlertDialog open={showNotifications} onOpenChange={setShowNotifications}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Notifications</AlertDialogTitle>
            <AlertDialogDescription>
              See likes, comments, and new followers here.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>

      {/* Messages Dialog */}
      <AlertDialog open={showMessages} onOpenChange={setShowMessages}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Direct Messages</AlertDialogTitle>
            <AlertDialogDescription>
              Send private messages to your friends and share posts.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>

      {/* Menu Dialog */}
      <AlertDialog open={showMenu} onOpenChange={setShowMenu}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Menu</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="space-y-2">
                <div className="cursor-pointer hover:bg-gray-100 p-2 rounded">Settings</div>
                <div className="cursor-pointer hover:bg-gray-100 p-2 rounded">Saved</div>
                <div className="cursor-pointer hover:bg-gray-100 p-2 rounded">Your activity</div>
                <div className="cursor-pointer hover:bg-gray-100 p-2 rounded">Report a problem</div>
                <div className="cursor-pointer hover:bg-gray-100 p-2 rounded">Switch accounts</div>
                <div className="cursor-pointer hover:bg-gray-100 p-2 rounded">Log out</div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};