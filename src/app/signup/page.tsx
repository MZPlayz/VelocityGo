
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/use-auth.tsx';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function SignupPage() {
  const { login } = useAuth();
  const router = useRouter();

  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const firstName = (form.elements.namedItem('first-name') as HTMLInputElement).value;
    const lastName = (form.elements.namedItem('last-name') as HTMLInputElement).value;
    // New users are always registered as riders
    login(email, `${firstName} ${lastName}`, 'rider');
    router.push('/account');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background md:bg-muted">
       <main className="mx-auto w-full max-w-md bg-background md:shadow-lg min-h-screen md:min-h-fit md:rounded-lg">
        <div className="p-4 pt-6 space-y-6">
           <Link href="/" className="flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft className="size-5" />
            Back to Home
          </Link>
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle as="h2" className="text-2xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Max" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Robinson" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="123-456-7890"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  Sign up with Google
                </Button>
              </form>
              <div className="mt-4 text-center text-sm">
                Already have an account?{' '}
                <Link href="/login" className="underline">
                  Login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
