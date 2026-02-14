import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import { Showcase } from "gh-showcase";
import "gh-showcase/style.css";
import ProjectsSection from "@/components/ProjectsSection";
import DockNav from "@/components/DockNav";

const Index = () => {
  return (
    <>
      <main className="mx-auto max-w-2xl px-6 pb-28 pt-16">
        <div className="space-y-12">
          <ProfileHeader />
          <AboutSection />
          <div className="gh-clean">
          <Showcase username="BrajamohanDas-afk" theme="dark" />
          </div>
          <ProjectsSection />
        </div>
      </main>
      <DockNav />
    </>
  );
};

export default Index;
