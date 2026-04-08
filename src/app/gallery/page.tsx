"use client";

import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import gallery, { GalleryItem } from "@/data/gallery";
import GalleryLightbox from "@/components/GalleryLightbox";
import styles from "./GalleryPage.module.css";

const galleryList = gallery as GalleryItem[];
const categories = ["all", "food", "activities", "landscapes"] as const;

type Category = (typeof categories)[number];

type GalleryGridProps = {
  items: GalleryItem[];
  onSelect: (item: GalleryItem) => void;
};

function GalleryGrid({ items, onSelect }: GalleryGridProps) {
  return (
    <Row className="g-3">
      {items.map((img, idx) => (
        <Col key={`${img.src}-${idx}`} xs={12} sm={6} md={4}>
          <Card className={styles.galleryCard}>
            <div className={styles.cardImage}>
              <Image
                src={img.src}
                alt={img.caption || ""}
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <Card.Body className={styles.cardBody}>
              <Card.Text className={styles.caption}>{img.caption}</Card.Text>

              <div className={styles.cardFooter}>
                <small className={styles.categoryTag}>
                  {img.category}
                </small>
                <Button
                  size="sm"
                  className={styles.viewButton}
                  onClick={() => onSelect(img)}
                >
                  View
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<Category>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items =
    filter === "all"
      ? galleryList
      : galleryList.filter((g) => g.category === filter);

  return (
    <Container className="py-5">
      <section className={styles.pageShell}>
        <div className={styles.pageHeader}>
          <span className={styles.eyebrow}>Visual story</span>
          <h1 className={styles.title}>Gallery</h1>
          <p className={styles.lead}>
            Browse food, activities, and landscapes from Malawi in a clean,
            editorial-style layout.
          </p>
        </div>

        <div className={styles.filterRow}>
          {categories.map((c) => (
            <Button
              key={c}
              variant={filter === c ? "success" : "outline-success"}
              size="sm"
              onClick={() => setFilter(c)}
              className={styles.filterButton}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </Button>
          ))}
        </div>

        <GalleryGrid items={items} onSelect={setSelected} />

        {selected && (
          <GalleryLightbox
            src={selected.src}
            caption={selected.caption}
            onClose={() => setSelected(null)}
          />
        )}
      </section>
    </Container>
  );
}