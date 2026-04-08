'use client'

import { motion } from 'framer-motion'
import { springs } from '@/lib/springs'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const offsets = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ ...springs.primary, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
