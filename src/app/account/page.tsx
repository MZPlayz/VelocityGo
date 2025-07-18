
'use client';

import { useAuth } from '@/hooks/use-auth.tsx';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AccountPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-md bg-background pb-28 shadow-lg min-h-screen">
        <div className="p-4 pt-6 space-y-6">
           <Link href="/" className="flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft className="size-5" />
            Back to Home
          </Link>
          <Card>
            <CardHeader>
              <CardTitle>My Account</CardTitle>
              <CardDescription>
                View and manage your account details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Name</h3>
                <p>{user.name}</p>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>{user.email}</p>
              </div>
              <Button onClick={handleLogout} variant="destructive" className="w-full">
                Logout
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
