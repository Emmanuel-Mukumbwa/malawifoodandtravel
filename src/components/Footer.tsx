// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <div className="container">
        <div className="d-flex justify-content-center gap-3 mb-2">
          <a href="/" className="text-white">Home</a>
          <a href="/destinations" className="text-white">Destinations</a>
          <a href="/itineraries" className="text-white">Itineraries</a>
          <a href="/gallery" className="text-white">Gallery</a>
          <a href="/about" className="text-white">About</a>
        </div>
        <div className="text-center pb-3">
          <small>© 2026 Malawi Food & Travel. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}