'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import ObjectDetection from "../objectDetect"
import { Button } from "@/components/ui/button"

export default function Home() {
    const [showAI, setShowAI] = useState(false)

    return (
        <main className="flex flex-col w-screen items-center justify-center min-h-screen p-8 bg-gradient-to-br from-gray-900 via-purple-950 to-violet-950">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="mb-8 text-5xl font-extrabold tracking-tighter duration-300 hover:scale-125 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 md:text-6xl lg:text-7xl">
                    AI Object Detection
                </h1>
                <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
                    Unlock the power of AI to identify objects in your surroundings. Ready to see the world through AI&apos;s eyes?
                </p>
                {!showAI ? (
                    <Button
                        onClick={() => setShowAI(true)}
                        size="lg"
                        className="text-white transition-all duration-300 transform bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:scale-105"
                    >
                        <Sparkles className="w-4 h-4 mr-2" /> Start Object Detection
                    </Button>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 bg-gray-800 border border-purple-500 rounded-lg shadow-2xl"
                    >
                        <ObjectDetection />
                    </motion.div>
                )}
            </motion.div>
            {showAI && (
                <Button
                    onClick={() => setShowAI(false)}
                    variant="outline"
                    className="mt-8 text-purple-400 transition-all duration-300 bg-transparent border-purple-500 hover:bg-purple-900 hover:text-white"
                >
                    Reset
                </Button>
            )}
        </main>
    )
}
