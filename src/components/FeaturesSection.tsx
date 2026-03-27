import { Row, Col } from "react-bootstrap";
import { FaUtensils, FaTractor, FaGlassCheers } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <FaUtensils size={36} style={{ color: "#D2691E" }} />,
    title: "Local Dishes",
    description: "Taste nsima, chambo, and regional specialties.",
  },
  {
    icon: <FaTractor size={36} style={{ color: "#D2691E" }} />,
    title: "Farm Tours",
    description: "Visit farms and learn about traditional cooking methods.",
  },
  {
    icon: <FaGlassCheers size={36} style={{ color: "#D2691E" }} />,
    title: "Food Festivals",
    description: "Join celebrations and taste the best of Malawi.",
  },
];

export default function FeaturesSection() {
  return (
    <Row className="text-center mt-5">
      {features.map((feature, idx) => (
        <Col key={idx} md={4} className="mb-4">
          <FeatureCard {...feature} />
        </Col>
      ))}
    </Row>
  );
}