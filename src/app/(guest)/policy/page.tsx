import Hero from '@/components/marketing/Hero'
import Services from '@/components/marketing/Services'
import { HomeProps } from '@/types'
import React from 'react'

export default function page({ headerRef }: HomeProps) {
    return (
        <div className='overflow-hidden'>
            <Hero headerRef={headerRef} />
            <Services />
        </div>
    )
}
