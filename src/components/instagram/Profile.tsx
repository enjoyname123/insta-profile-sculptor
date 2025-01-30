import { MoreHorizontal, Link as LinkIcon } from "lucide-react";
import { StoryHighlights } from "./StoryHighlights";

export const Profile = () => {
  return (
    <div className="max-w-[975px] mx-auto pt-[90px] px-4">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[100px] items-center md:items-start">
        <div className="flex-shrink-0">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
            <img
              src="https://picsum.photos/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-[28px] font-light">username</h2>
            <button className="ig-button-primary">Follow</button>
            <button className="ig-button-secondary">Message</button>
            <MoreHorizontal className="w-8 h-8 cursor-pointer" />
          </div>

          <div className="flex gap-10 mb-6">
            <div><span className="font-semibold">1,234</span> posts</div>
            <div><span className="font-semibold">4.5M</span> followers</div>
            <div><span className="font-semibold">1,234</span> following</div>
          </div>

          <div className="space-y-1">
            <h1 className="font-semibold">Display Name</h1>
            <p>Bio goes here with multiple lines<br />of text to show the formatting</p>
            <a href="#" className="ig-link flex items-center gap-1">
              <LinkIcon className="w-4 h-4" />
              website.com
            </a>
          </div>
        </div>
      </div>

      <StoryHighlights />
    </div>
  );
};