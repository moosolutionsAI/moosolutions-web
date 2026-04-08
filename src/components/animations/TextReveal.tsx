'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

interface TextRevealProps {
  text: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  stagger?: number
  delay?: number
  splitBy?: 'words' | 'chars'
}

export default function TextReveal({
  text,
  className = '',
  tag: Tag = 'h1',
  stagger = 0.08,
  delay = 0,
  splitBy = 'words',
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const elements = containerRef.current?.querySelectorAll('.split-item')
      if (!elements?.length) return

      gsap.fromTo(
        elements,
        { opacity: 0, y: 30, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    },
    { scope: containerRef }
  )

  const items = splitBy === 'words' ? text.split(' ') : text.split('')

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Tag className={className}>
        {items.map((item, i) => (
          <span
            key={i}
            className="split-item inline-block"
            style={{ willChange: 'transform, opacity' }}
          >
            {item}
            {splitBy === 'words' && i < items.length - 1 ? '\u00A0' : ''}
          </span>
        ))}
      </Tag>
    </div>
  )
}
