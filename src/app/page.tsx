'use client'
import { signOut, useSession } from 'next-auth/react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebase';

import { Button } from "@/components/ui/button";
import { ExitIcon } from '@radix-ui/react-icons';
import Header from './components/Header';

export default function Home() {
  const session = useSession();
  const [role, setRole] = useState(null);
  
  // Fetch user's role from Firestore
  useEffect(() => {

    const fetchUserRole = async () => {
      if (session?.data?.user?.email) {
        const q = query(collection(db, 'users'), where('email', '==', session.data.user.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Assuming there's only one document per user
          const userData = querySnapshot.docs[0].data();
          setRole(userData.role); // Set the user's role
        }
      }
    };
    fetchUserRole();
  }, [session?.data?.user?.email]);
  return (
  <>
    <div>
      <Header 
        name = {session?.data?.user?.name}
        avatar = {session?.data?.user?.image}
        role = {role}
      /> 
    </div>

      {role === 'admin' && (
        <Button className="mt-4">
          Admin-Only Button
        </Button>
      )}
  </>
  );
}
