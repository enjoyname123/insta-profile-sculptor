import { Grid, Bookmark, UserSquare } from "lucide-react";
import { useState } from "react";
import { PostsGrid } from "./PostsGrid";

export const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState<"posts" | "saved" | "tagged">("posts");

  return (
    <div className="border-t border-igborder mt-8">
      <div className="flex justify-center">
        <button
          onClick={() => setActiveTab("posts")}
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
          onClick={() => setActiveTab("saved")}
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
          onClick={() => setActiveTab("tagged")}
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