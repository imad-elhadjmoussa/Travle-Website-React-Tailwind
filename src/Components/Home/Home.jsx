import React from 'react'
import { Hero } from './Hero'
import { PopularDestination } from './PopularDestination'
import { RecentsTrips } from './RecentsTrips'
import { AnimatePresence, motion } from 'framer-motion'

export const Home = () => {
    return (

            <motion.div>
            
                <Hero />
                <PopularDestination />
                <RecentsTrips />
            </motion.div>
    )
}
