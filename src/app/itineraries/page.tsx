import itineraries from "@/data/itineraries";
import { Container, Row, Col } from "react-bootstrap";
import ItineraryCard from "@/components/ItineraryCard";
import Link from "next/link";
import styles from "./ItinerariesPage.module.css";

export default function ItinerariesPage() {
  return (
    <Container className="py-5">
      <section className={styles.pageShell}>
        <div className={styles.pageHeader}>
          <span className={styles.eyebrow}>Plan your trip</span>
          <h1 className={styles.title}>Itineraries</h1>
          <p className={styles.lead}>
            Browse curated travel ideas that combine food, scenery, and local
            experiences across Malawi.
          </p>
        </div>

        <Row className="g-4">
          {itineraries.map((it: any) => (
            <Col key={it.slug} xs={12} md={6} lg={4}>
              <div className={styles.cardWrap}>
                <ItineraryCard itinerary={it} />
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Link href="/destinations" className={styles.outlineButton}>
            Explore Destinations
          </Link>
        </div>
      </section>
    </Container>
  );
}