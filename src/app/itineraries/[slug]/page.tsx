import itineraries from '@/data/itineraries';
import Image from 'next/image';
import { Container, Row, Col, Badge, Accordion, Button } from 'react-bootstrap';
import Link from 'next/link';
import styles from '@/components/Shared.module.css';

export async function generateStaticParams() {
  return itineraries.map((it: any) => ({ slug: it.slug }));
}

export default function ItineraryDetail({ params }: { params: { slug: string } }) {
  const it = itineraries.find((i: any) => i.slug === params.slug);
  if (!it) return <Container className="py-5"><h2>Not found</h2></Container>;

  return (
    <Container className="py-5">
      <div className={`mb-4 ${styles.heroImage}`}>
        <Image src={it.mainImage} alt={it.title} fill style={{ objectFit: 'cover' }} />
      </div>

      <Row>
        <Col md={8}>
          <h1 className="text-success">{it.title}</h1>
          <p className="text-muted"><strong>{it.durationDays} days</strong> • <Badge bg="light" text="dark">{it.priceRange}</Badge></p>
          <p>{it.description}</p>

          <h5 className="mt-4">Highlights</h5>
          <ul>
            {it.highlights.map((h: string, idx: number) => <li key={idx}>{h}</li>)}
          </ul>

          <h5 className="mt-4">Day by day</h5>
          <Accordion>
            {it.itineraryDays.map((d: any, idx: number) => (
              <Accordion.Item eventKey={String(idx)} key={idx}>
                <Accordion.Header>Day {d.day}: {d.title}</Accordion.Header>
                <Accordion.Body>
                  <p><strong>Activities:</strong></p>
                  <ul>{d.activities.map((a: string, i: number) => <li key={i}>{a}</li>)}</ul>
                  <p><strong>Meals:</strong> {d.meals.join(', ')}</p>
                  {d.images && d.images.length > 0 && (
                    <div className="d-flex gap-2 flex-wrap mt-2">
                      {d.images.map((img: string, i: number) => (
                        <div key={i} className={styles.imgThumb}>
                          <Image src={img} alt={`Day ${d.day} image`} fill style={{ objectFit: 'cover' }} />
                        </div>
                      ))}
                    </div>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
        <Col md={4}>
          <div className="p-3 border rounded">
            <h6>Pricing</h6>
            <p className="mb-2">{it.priceRange}</p>
            <Link href={`/contact?subject=${encodeURIComponent(it.title)}`} className="text-decoration-none">
              <Button className="btn-success w-100">Request a Quote</Button>
            </Link>

            <h6 className="mt-4">Included</h6>
            <ul>
              {it.included.map((x: string, idx: number) => <li key={idx}>{x}</li>)}
            </ul>

            <h6 className="mt-3">Excluded</h6>
            <ul>
              {it.excluded.map((x: string, idx: number) => <li key={idx}>{x}</li>)}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
