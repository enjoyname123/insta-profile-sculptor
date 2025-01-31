import { Search, Heart, Menu, MessageCircle, PlusSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { NewPostDialog } from "./dialogs/NewPostDialog";
import { NotificationsDialog } from "./dialogs/NotificationsDialog";
import { MessagesDialog } from "./dialogs/MessagesDialog";
import { MenuDialog } from "./dialogs/MenuDialog";

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

      <NewPostDialog open={showNewPost} onOpenChange={setShowNewPost} />
      <NotificationsDialog open={showNotifications} onOpenChange={setShowNotifications} />
      <MessagesDialog open={showMessages} onOpenChange={setShowMessages} />
      <MenuDialog open={showMenu} onOpenChange={setShowMenu} />
    </>
  );
};