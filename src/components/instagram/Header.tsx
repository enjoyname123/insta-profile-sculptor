import { Search, Heart, Menu, MessageCircle, PlusSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

          <div className="flex items-center gap-5 relative">
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
      <Dialog open={showNewPost} onOpenChange={setShowNewPost}>
        <DialogContent className="fixed right-[80px] top-[70px] w-[400px] bg-white rounded-xl shadow-lg transform-none translate-x-0 translate-y-0">
          <DialogHeader>
            <DialogTitle className="text-center border-b pb-2">Create New Post</DialogTitle>
            <DialogDescription className="text-center pt-12 pb-12">
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <PlusSquare className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-black">Drag photos and videos here</p>
                <button className="bg-igbutton text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Select from computer
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Notifications Dialog */}
      <Dialog open={showNotifications} onOpenChange={setShowNotifications}>
        <DialogContent className="fixed right-[80px] top-[70px] w-[400px] bg-white rounded-xl shadow-lg transform-none translate-x-0 translate-y-0">
          <DialogHeader>
            <DialogTitle className="text-center border-b pb-2">Notifications</DialogTitle>
            <DialogDescription className="pt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <p className="text-sm text-black">
                    <span className="font-semibold">user123</span> liked your photo.
                    <span className="text-gray-500 text-xs ml-2">2h</span>
                  </p>
                </div>
                <div className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <p className="text-sm text-black">
                    <span className="font-semibold">another_user</span> started following you.
                    <span className="text-gray-500 text-xs ml-2">5h</span>
                  </p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Messages Dialog */}
      <Dialog open={showMessages} onOpenChange={setShowMessages}>
        <DialogContent className="fixed right-[80px] top-[70px] w-[400px] bg-white rounded-xl shadow-lg transform-none translate-x-0 translate-y-0">
          <DialogHeader>
            <DialogTitle className="text-center border-b pb-2">Messages</DialogTitle>
            <DialogDescription className="pt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-semibold text-sm text-black">user123</p>
                    <p className="text-gray-500 text-xs">Active 2h ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="font-semibold text-sm text-black">another_user</p>
                    <p className="text-gray-500 text-xs">Active 5m ago</p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Menu Dialog */}
      <Dialog open={showMenu} onOpenChange={setShowMenu}>
        <DialogContent className="fixed right-[20px] top-[70px] w-[250px] bg-white rounded-xl shadow-lg transform-none translate-x-0 translate-y-0">
          <DialogHeader>
            <DialogTitle className="sr-only">Menu</DialogTitle>
            <DialogDescription>
              <div className="space-y-1">
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg text-black">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg text-black">
                  Saved
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg text-black">
                  Your activity
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg text-black">
                  Report a problem
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg text-black">
                  Switch accounts
                </button>
                <hr className="my-2" />
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg text-black">
                  Log out
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};