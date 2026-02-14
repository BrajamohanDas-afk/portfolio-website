import avatarImg from "@/assets/avatar.jpg";

const ProfileHeader = () => {
  return (
    <header className="flex items-center gap-6">
      <img
        src={avatarImg}
        alt="Profile avatar"
        className="h-20 w-20 rounded-full object-cover ring-2 ring-border"
      />
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Ritesh Bucha</h1>
        <p className="mt-1 text-muted-foreground">
          Creating with code. Small details matter.
        </p>
      </div>
    </header>
  );
};

export default ProfileHeader;
