import { useEffect, useState } from "react";
import avatarImg from "@/assets/avatar.jpg";

const taglineOptions = [
  "Shipping usable products, not demos",
  "Modern web products, built end-to-end",
  "Building fast, usable web products",
];

const ProfileHeader = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTaglineIndex((currentIndex) => (currentIndex + 1) % taglineOptions.length);
    },5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <header className="flex items-center gap-6">
      <img
        src={avatarImg}
        alt="Profile avatar"
        className="h-20 w-20 rounded-full object-cover ring-2 ring-border"
      />
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Brajamohan Das</h1>
        <p key={taglineIndex} className="mt-1 text-muted-foreground animate-fade-in">
          {taglineOptions[taglineIndex]}
        </p>
      </div>
    </header>
  );
};

export default ProfileHeader;