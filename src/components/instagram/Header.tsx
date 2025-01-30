import { Search, Heart, Menu, MessageCircle, PlusSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const isMobile = useIsMobile();

  return (
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
          <PlusSquare className="w-6 h-6 cursor-pointer" />
          <Heart className="w-6 h-6 cursor-pointer" />
          <MessageCircle className="w-6 h-6 cursor-pointer" />
          <Menu className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};