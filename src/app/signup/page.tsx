
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SignupForm } from '@/components/auth/SignupForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background md:bg-muted">
       <main className="mx-auto w-full max-w-md bg-background md:shadow-lg min-h-screen md:min-h-fit md:rounded-lg">
        <div className="p-4 pt-6 space-y-4">
           <Link href="/" className="flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft className="size-5" />
            Back to Home
          </Link>
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle as="h2" className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Enter your details below to get started.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignupForm />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
