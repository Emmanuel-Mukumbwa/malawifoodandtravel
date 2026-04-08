"use client";
import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import gallery, { GalleryItem } from '@/data/gallery';
const galleryList = gallery as GalleryItem[];
import GalleryLightbox from '@/components/GalleryLightbox';
import styles from '@/components/Shared.module.css';

const categories = ['all', 'food', 'activities', 'landscapes'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null as any);

  const items = filter === 'all' ? galleryList : galleryList.filter((g: GalleryItem) => g.category === filter);

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center text-dark">Gallery</h1>
      <div className="d-flex justify-content-center mb-4 gap-2">
        {categories.map(c => (
          <Button key={c} variant={filter === c ? 'success' : 'outline-success'} size="sm" onClick={() => setFilter(c)}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </Button>
        ))}
      </div>

      <Row className="g-3">
        {items.map((img: any, idx: number) => (
          <Col key={idx} xs={12} sm={6} md={4}>
            <Card className="border-0 shadow-sm h-100">
              <div className={styles.imgCrop}>
                <Image src={img.src} alt={img.caption || ''} fill style={{ objectFit: 'cover' }} />
              </div>
              <Card.Body>
                <Card.Text className="small text-muted">{img.caption}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted text-capitalize">{img.category}</small>
                  <Button size="sm" variant="outline-success" onClick={() => setSelected(img)}>View</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selected && <GalleryLightbox src={selected.src} caption={selected.caption} onClose={() => setSelected(null)} />}
    </Container>
  );
}
