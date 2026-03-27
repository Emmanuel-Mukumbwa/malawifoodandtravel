import { Spinner } from "react-bootstrap";

export default function Loading({ message = "Savoring flavors..." }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-50 py-5">
      {/* Animated plate or icon */}
      <div className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="currentColor"
          className="bi bi-egg-fried text-warning animate-spin"
          viewBox="0 0 16 16"
        >
          <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 5 5 0 0 0 4.381-9.28z" />
        </svg>
      </div>
      <Spinner animation="border" variant="success" className="mb-2" />
      <p className="text-muted fs-5">{message}</p>
    </div>
  );
}