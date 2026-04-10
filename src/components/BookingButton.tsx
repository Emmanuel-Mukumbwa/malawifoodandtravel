"use client";

import ContactForm from "./ContactForm";

export default function BookingButton({ itineraryTitle }: { itineraryTitle: string }) {
  return (
    <ContactForm
      presetSubject={`Inquiry: ${itineraryTitle}`}
      buttonText="Request a Quote"
      modalTitle={`Request details for ${itineraryTitle}`}
    />
  );
}