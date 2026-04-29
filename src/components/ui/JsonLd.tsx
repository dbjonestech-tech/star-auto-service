type JsonLdProps = {
  data: object;
};

/** Renders a structured-data <script> tag. Server component. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
