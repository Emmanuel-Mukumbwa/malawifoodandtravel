import { Container } from "react-bootstrap";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="py-4">
        <FeaturesSection />
      </Container>
    </>
  );
}