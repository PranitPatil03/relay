'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import { Button } from '../shared/Button'

function NeurixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    function resize() {
      if (!canvas || !ctx) return
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
      draw()
    }

    function draw() {
      if (!canvas || !ctx) return
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = '#0a0a0a'
      ctx.fillRect(0, 0, w, h)

      const numBars = 26
      const barWidth = w / numBars
      const dotSize = 2.2
      const spacing = 6

      for (let i = 0; i < numBars; i++) {
        const cx = i * barWidth + barWidth / 2
        const barHeight = h * (0.55 + Math.random() * 0.25)
        const startY = (h - barHeight) / 2

        for (let y = startY; y < startY + barHeight; y += spacing) {
          for (
            let x = cx - barWidth * 0.4;
            x < cx + barWidth * 0.4;
            x += spacing
          ) {
            const progress = (y - startY) / barHeight

            let r, g, b
            if (progress < 0.4) {
              const t = progress / 0.4
              r = Math.floor(20 + t * 60)
              g = Math.floor(30 + t * 20)
              b = Math.floor(120 + t * 60)
            } else if (progress < 0.65) {
              const t = (progress - 0.4) / 0.25
              r = Math.floor(80 + t * 100)
              g = Math.floor(50 + t * 30)
              b = Math.floor(180 - t * 20)
            } else {
              const t = (progress - 0.65) / 0.35
              r = Math.floor(180 + t * 60)
              g = Math.floor(80 + t * 80)
              b = Math.floor(160 + t * 40)
            }

            let alpha = 1
            if (progress < 0.15) alpha = progress / 0.15
            else if (progress > 0.85) alpha = (1 - progress) / 0.15

            alpha *= 0.3 + Math.random() * 0.7

            const colBrightness = 0.5 + (Math.sin(i * 1.7) * 0.3 + 0.3)
            alpha *= colBrightness

            if (Math.random() > 0.35) {
              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.8})`
              ctx.fillRect(x, y, dotSize, dotSize)
            }
          }
        }
      }
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
      <div className="absolute inset-x-0 top-0 h-[8%] bg-gradient-to-b from-[#0a0a0a] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[10%] bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(10,10,10,0.6) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <NeurixBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="font-sans text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-7xl">
            Start Chatting
          </h1>
          <h1 className="font-sans text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-7xl">
            without frictions
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-8 max-w-2xl text-base text-neutral-400 sm:mt-10 sm:text-lg"
          >
            One click to create a room. One link to invite your team.
            <br />
            Zero barriers to communication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <Link href="/register" className="w-full sm:w-auto">
              <Button className="w-full rounded-full bg-white px-8 py-3.5 font-semibold text-black transition-all hover:scale-105 hover:bg-neutral-100">
                Get started
              </Button>
            </Link>
            <Link href="/room/public" className="w-full sm:w-auto">
              <Button className="w-full rounded-full border border-white/30 bg-transparent px-8 py-3.5 font-semibold text-white transition-all hover:scale-105 hover:border-white/50 hover:bg-white/10">
                Join public
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
