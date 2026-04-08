"use client";

import { useSearchParams } from "next/navigation";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "./DestinationsPage.module.css";

const destinations = [
  {
    id: 1,
    name: "La Rondavelle Chilumba",
    location: "Chilumba, Karonga District",
    description:
      "A serene lakeside resort offering traditional rondavels and stunning views of Lake Malawi.",
    image: "/images/destinations/la-rondavelle.jpg",
    category: "resort",
  },
  {
    id: 2,
    name: "Songwe Border",
    location: "Karonga District",
    description:
      "Historic border crossing between Malawi and Tanzania, with scenic views of the Songwe River.",
    image: "/images/destinations/songwe-border.jpg",
    category: "scenic",
  },
  {
    id: 3,
    name: "Misuku Hills",
    location: "Chitipa District",
    description:
      "Lush green hills with coffee estates, hiking trails, and breathtaking panoramas.",
    image: "/images/destinations/misuku-hills.jpg",
    category: "scenic",
  },
  {
    id: 4,
    name: "Karonga Museum",
    location: "Karonga Town",
    description:
      "Fossil exhibits and cultural history of the region, including the famous Malawisaurus.",
    image: "/images/destinations/karonga-museum.jpg",
    category: "cultural",
  },
  {
    id: 5,
    name: "Malawisaurus Fossil Site",
    location: "Karonga District",
    description:
      "Site where the Malawisaurus dinosaur was discovered – a must-visit for paleontology enthusiasts.",
    image: "/images/destinations/malawisaurus.jpg",
    category: "cultural",
  },
  {
    id: 6,
    name: "Chilumba Resorts",
    location: "Chilumba, Karonga District",
    description:
      "Lakeside resorts with white sand beaches, water sports, and tranquil surroundings.",
    image: "/images/destinations/chilumba-resorts.jpg",
    category: "resort",
  },
  {
    id: 7,
    name: "Lilongwe Market Food Tour",
    location: "Lilongwe",
    description:
      "Explore the bustling central market, taste fresh produce, and sample local street food.",
    image: "/images/destinations/lilongwe-market.jpg",
    category: "market",
  },
  {
    id: 8,
    name: "Mzuzu Cooking Class",
    location: "Mzuzu",
    description:
      "Learn to prepare nsima and traditional relishes with a local chef.",
    image: "/images/destinations/cooking-class.jpg",
    category: "cooking",
  },
  {
    id: 9,
    name: "Zomba Food Festival",
    location: "Zomba",
    description:
      "Annual celebration of Malawi's culinary heritage, with tastings and live music.",
    image: "/images/destinations/food-festival.jpg",
    category: "festival",
  },
];

export default function DestinationsPage() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const filtered = categoryFilter
    ? destinations.filter((d) => d.category === categoryFilter)
    : destinations;

  const categoryLabels: Record<string, string> = {
    cooking: "Cooking Class",
    market: "Market Tour",
    festival: "Food Festival",
    scenic: "Scenic",
    cultural: "Cultural",
    resort: "Resort",
  };

  return (
    <Container className="py-5">
      <section className={styles.pageShell}>
        <div className={styles.pageHeader}>
          <span className={styles.eyebrow}>Explore Malawi</span>
          <h1 className={styles.title}>Destinations</h1>
          <p className={styles.lead}>
            Discover culinary experiences and must-see attractions across Malawi.
          </p>
        </div>

        {categoryFilter && (
          <div className={styles.filterBar}>
            <Badge bg="success" className={styles.filterBadge}>
              Showing: {categoryLabels[categoryFilter] || categoryFilter}
            </Badge>
            <Link href="/destinations" className={styles.clearLink}>
              Clear filter
            </Link>
          </div>
        )}

        <Row className="g-4">
          {filtered.map((dest) => (
            <Col key={dest.id} xs={12} md={6} lg={4}>
              <Card className={styles.destCard}>
                <div className={styles.cardImage}>
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>{dest.name}</Card.Title>
                  <Card.Subtitle className={styles.cardSubtitle}>
                    {dest.location}
                  </Card.Subtitle>
                  <Card.Text className={styles.cardText}>
                    {dest.description}
                  </Card.Text>
                  <Badge bg="light" text="dark" className={styles.categoryBadge}>
                    {categoryLabels[dest.category] || dest.category}
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}