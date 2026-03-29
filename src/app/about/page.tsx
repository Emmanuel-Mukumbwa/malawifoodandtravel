'use client';
import { Container, Row, Col, Card } from "react-bootstrap";

export default function AboutPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center" style={{ color: "#212529" }}>About Malawi Food & Travel</h1>
      <Row className="justify-content-center">
        <Col lg={8}>
          <p className="lead text-center mb-5" style={{ color: "#212529" }}>
            We celebrate Malawi’s rich culinary heritage and showcase its most captivating travel destinations – from bustling food markets to serene lakeside resorts.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <h3 className="h5 text-success">Culinary Experiences</h3>
              <p className="text-muted">
                Taste your way through Malawi with cooking classes, market tours, and food festivals that highlight local ingredients and traditions.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <h3 className="h5 text-success">Travel Destinations</h3>
              <p className="text-muted">
                Explore scenic landscapes, cultural sites, and idyllic lakeside resorts – perfect for adventure and relaxation.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <h3 className="h5 text-success">Our Story</h3>
              <p className="text-muted">
                Born from a passion for authentic Malawian food and a love of travel, we connect visitors with unique experiences across the country.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <h3 className="h5 text-success">Contact Us</h3>
              <p className="text-muted">
                Have questions or want to plan a trip? Reach out to us at <a href="mailto:info@foodtourismmalawi.com">info@foodtourismmalawi.com</a> or follow us on social media.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}