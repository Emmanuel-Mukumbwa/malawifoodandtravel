//src/app/itineraries/[slug]/page.tsx
import itineraries from "@/data/itineraries";
import Image from "next/image";
import {
  Container,
  Row,
  Col,
  Badge,
  Accordion,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "@/app/itineraries/[slug]/ItineraryDetail.module.css";

export async function generateStaticParams() {
  return itineraries.map((it: any) => ({ slug: it.slug }));
}

export default function ItineraryDetail({
  params,
}: {
  params: { slug: string };
}) {
  const it = itineraries.find((i: any) => i.slug === params.slug);

  if (!it) notFound();

  return (
    <Container className="py-5">
      <section className={styles.pageShell}>
        <Link href="/itineraries" className={styles.backLink}>
          ← Back to itineraries
        </Link>

        <div className={styles.heroImage}>
          <Image
            src={it.mainImage}
            alt={it.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroText}>
            <span className={styles.heroBadge}>Featured itinerary</span>
            <h1 className={styles.heroTitle}>{it.title}</h1>
            <p className={styles.heroMeta}>
              <strong>{it.durationDays} days</strong> •{" "}
              <Badge bg="light" text="dark" className={styles.priceBadge}>
                {it.priceRange}
              </Badge>
            </p>
          </div>
        </div>

        <Row className="g-4 mt-1">
          <Col md={8}>
            <div className={styles.contentCard}>
              <h2 className={styles.sectionTitle}>Overview</h2>
              <p className={styles.bodyText}>{it.description}</p>

              <h5 className={styles.subTitle}>Highlights</h5>
              <ul className={styles.list}>
                {it.highlights.map((h: string, idx: number) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>

              <h5 className={styles.subTitle}>Day by day</h5>
              <Accordion className={styles.accordionShell}>
                {it.itineraryDays.map((d: any, idx: number) => (
                  <Accordion.Item eventKey={String(idx)} key={idx}>
                    <Accordion.Header>
                      Day {d.day}: {d.title}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="mb-2">
                        <strong>Activities:</strong>
                      </p>
                      <ul className={styles.list}>
                        {d.activities.map((a: string, i: number) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>

                      <p className="mb-3">
                        <strong>Meals:</strong> {d.meals.join(", ")}
                      </p>

                      {d.images && d.images.length > 0 && (
                        <div className={styles.thumbRow}>
                          {d.images.map((img: string, i: number) => (
                            <div key={i} className={styles.imgThumb}>
                              <Image
                                src={img}
                                alt={`Day ${d.day} image`}
                                fill
                                sizes="96px"
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>

          <Col md={4}>
            <aside className={styles.sidebarCard}>
              <h5 className={styles.sidebarTitle}>Pricing</h5>
              <p className={styles.sidebarPrice}>{it.priceRange}</p>

              <Button
                href={`/contact?subject=${encodeURIComponent(it.title)}`}
                className={styles.primaryButton}
              >
                Request a Quote
              </Button>

              <div className={styles.sidebarBlock}>
                <h6 className={styles.sidebarSubTitle}>Included</h6>
                <ul className={styles.list}>
                  {it.included.map((x: string, idx: number) => (
                    <li key={idx}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.sidebarBlock}>
                <h6 className={styles.sidebarSubTitle}>Excluded</h6>
                <ul className={styles.list}>
                  {it.excluded.map((x: string, idx: number) => (
                    <li key={idx}>{x}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </Col>
        </Row>
      </section>
    </Container>
  );
}