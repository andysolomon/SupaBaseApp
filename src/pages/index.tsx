import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { supabase } from '../../lib/supabaseClient'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ countries }) {
    console.log('Countries :: ', countries)
    return <>working</>
}

export const getStaticProps = async () => {
    const { data: countries } = await supabase.from('countries').select('*')

    return {
        props: {
            countries,
        },
    }
}
