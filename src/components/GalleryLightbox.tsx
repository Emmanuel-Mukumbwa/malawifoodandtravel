"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './Shared.module.css';

interface Props {
  src?: string;
  caption?: string;
  onClose: () => void;
}

export default function GalleryLightbox({ src, caption, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!src) return null;

  return (
    <div className="modal show d-block" tabIndex={-1} role="dialog" onClick={onClose}>
      <div className="modal-dialog modal-xl modal-dialog-centered" role="document" onClick={e => e.stopPropagation()}>
        <div className="modal-content bg-transparent border-0">
          <div className={`modal-body p-0 position-relative ${styles.modalBodyMin}`}>
            <div className={styles.lightboxImage}>
              <Image src={src} alt={caption || 'Gallery image'} fill style={{ objectFit: 'contain' }} />
            </div>
            {caption && <div className="mt-2 text-center text-white bg-dark bg-opacity-75 py-2">{caption}</div>}
            <button type="button" className={`btn btn-light ${styles.lightboxCloseBtn}`} onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
