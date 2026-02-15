import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";
import { Showcase } from "gh-showcase";
import "gh-showcase/style.css";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import DockNav from "@/components/DockNav";

const Index = () => {
  return (
    <>
      <main className="mx-auto max-w-2xl px-6 pb-28 pt-16">
        <div className="space-y-12">
          <ProfileHeader />
          <AboutSection />
          <TechnicalSkillsSection />
          <div className="gh-clean gh-match space-y-3">
            <h2 className="text-xl font-semibold">GitHub Contributions</h2>
            <Showcase username="BrajamohanDas-afk" theme="dark" />
          </div>
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
      <DockNav />
    </>
  );
};

export default Index;
