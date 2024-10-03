import React from "react";
import styles from '../../styles/Header.module.css'
import { signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { ExitIcon } from '@radix-ui/react-icons';

interface HeaderProps {
    name: any;
    avatar: any;
    role: any
  }

export default function Header({ name, avatar, role }: HeaderProps) {
    const session = useSession();

  return (
    <>
    <div className={styles.header}>
        <div className={styles.profileInfo}>
            <div className={styles.mainInfo}>
                <div className={styles.avatar}>
                    <Avatar>
                        <AvatarImage src={avatar}/>
                        <AvatarFallback></AvatarFallback>
                    </Avatar>
                </div>
                <div className={styles.textInfo}>
                    <div className={styles.name}>
                    {name}
                    </div>
                    <div className={styles.role}>
                        {role === 'admin' ? (
                        <Badge variant="outline"> Админ </Badge>
                            ) : (
                        <Badge variant="outline"> Читатель </Badge>
                        )}
                    </div>
                </div>
            </div>
           
        </div>
        <div className={styles.logout}>
            <Button onClick={() => signOut()}> 
                <ExitIcon className="mr-2 h-4 w-4" /> Logout
            </Button>
        </div>
    </div>
     
    </>
  );
}