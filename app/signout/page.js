"use client";
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function SignOutPage() {
    const router = useRouter();

    useEffect(() => {
        signOut({ callbackUrl: '/' });
    }, []);

    return null;
}