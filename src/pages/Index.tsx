import { useState, useEffect } from "react";
import { Header } from "@/components/instagram/Header";
import { Profile } from "@/components/instagram/Profile";
import { ProfileTabs } from "@/components/instagram/ProfileTabs";
import { SkeletonLoader } from "@/components/instagram/SkeletonLoader";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-igbg">
      <Header />
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          <Profile />
          <ProfileTabs />
        </>
      )}
    </div>
  );
};

export default Index;