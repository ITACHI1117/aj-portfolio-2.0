import ContentSection from "@/components/content-5";
import Features from "@/components/features-4";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-1";
import StatsSection from "@/components/stats";
import { Testimonials } from "@/components/testemonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <IntegrationsSection />
      <Features />
      <StatsSection />
      {/* <Testimonials /> */}
      {/* <SkillsPassion /> */}
    </>
  );
}
