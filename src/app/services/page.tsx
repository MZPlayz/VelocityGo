import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-md bg-background pb-28 shadow-lg min-h-screen">
        <div className="p-4 pt-6 space-y-6">
          <Link href="/" className="flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft className="size-5" />
            Back
          </Link>
          <h1 className="text-2xl font-bold">Services</h1>
          <p>Here we can list all available services.</p>
        </div>
      </main>
    </div>
  );
}
