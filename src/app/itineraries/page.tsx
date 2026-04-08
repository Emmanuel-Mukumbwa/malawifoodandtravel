import itineraries from '@/data/itineraries';
import { Container, Row, Col } from 'react-bootstrap';
import ItineraryCard from '@/components/ItineraryCard';

export default function ItinerariesPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center text-dark">Itineraries</h1> 
      <Row className="g-4">
        {itineraries.map((it: any) => (
          <Col key={it.slug} md={6} lg={4}> 
            <ItineraryCard itinerary={it} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
