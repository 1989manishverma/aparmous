import { HomePage } from "@/components/HomePage";
import { projectSchema } from "@/lib/schema";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <HomePage />
    </>
  );
}
