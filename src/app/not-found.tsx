import { Button } from "@/components/ui/Button";

/** Custom 404 page. */
export default function NotFound() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary-light min-h-[60vh] flex items-center justify-center overflow-hidden">
      <span className="absolute inset-0 flex items-center justify-center text-[10rem] font-extrabold text-white opacity-20 select-none pointer-events-none">
        404
      </span>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-bold text-white">Page Not Found</h1>
        <p className="mt-4 text-lg text-white/70 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="/">
            Go Home
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="/contact"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
