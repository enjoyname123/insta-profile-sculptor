import { Grid, Bookmark, UserSquare } from "lucide-react";
import { useState } from "react";
import { PostsGrid } from "./PostsGrid";
import { useToast } from "@/components/ui/use-toast";

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState<"posts" | "saved" | "tagged">("posts");
  const { toast } = useToast();

  const handleTabChange = (tab: "posts" | "saved" | "tagged") => {
    setActiveTab(tab);
    if (tab !== "posts") {
      toast({
        title: `${tab.charAt(0).toUpperCase() + tab.slice(1)} Posts`,
        description: `${tab.charAt(0).toUpperCase() + tab.slice(1)} posts feature coming soon!`,
      });
    }
  };

  return (
    <div className="border-t border-igborder mt-8">
      <div className="flex justify-center">
        <button
          onClick={() => handleTabChange("posts")}
          className={`flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider ${
            activeTab === "posts"
              ? "text-igtext border-t border-igtext -mt-[1px]"
              : "text-iggray"
          }`}
        >
          <Grid className="w-4 h-4" />
          Posts
        </button>
        <button
          onClick={() => handleTabChange("saved")}
          className={`flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider ${
            activeTab === "saved"
              ? "text-igtext border-t border-igtext -mt-[1px]"
              : "text-iggray"
          }`}
        >
          <Bookmark className="w-4 h-4" />
          Saved
        </button>
        <button
          onClick={() => handleTabChange("tagged")}
          className={`flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider ${
            activeTab === "tagged"
              ? "text-igtext border-t border-igtext -mt-[1px]"
              : "text-iggray"
          }`}
        >
          <UserSquare className="w-4 h-4" />
          Tagged
        </button>
      </div>

      <PostsGrid />
    </div>
  );
};