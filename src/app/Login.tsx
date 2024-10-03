'use client'
import { Button } from "@/components/ui/button"
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'

import { signIn } from 'next-auth/react'

export default function Login(){
    return (
        <>
        <Button onClick={() => signIn('google')}> 
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login
        </Button>
        </>
    )
}