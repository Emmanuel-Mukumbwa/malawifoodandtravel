import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-4 border rounded bg-white shadow-sm h-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="d-flex justify-content-center mb-3">
        <div className="p-3 rounded-circle bg-light shadow-sm d-inline-flex">
          {icon}
        </div>
      </div>
      <h3 className="h4 fw-bold text-dark mb-3 text-center">{title}</h3>
      <p className="text-secondary text-center mb-0">{description}</p>
    </div>
  );
}