import { Container } from "react-bootstrap";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center" style={{ color: "#212529" }}>Contact Us</h1>
      <div className="mx-auto" style={{ maxWidth: 600 }}>
        <ContactForm inline buttonText="Send Message" />
      </div>
    </Container>
  );
}