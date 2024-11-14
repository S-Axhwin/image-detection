"use client"

import { Avatar, AvatarFallback, } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, useAnimation, useInView } from "framer-motion"
import { RockingChairIcon as ChairIcon, Coffee, Users, Watch } from 'lucide-react'
import Link from "next/link"
import { useEffect, useRef } from "react"

import Navbar from "@/components/Navbar"
import { contri } from "./contr"

const MotionLink = motion(Link)
const MotionButton = motion(Button)

function AnimatedSection({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    return (
        <motion.section
            id={id}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } }
            }}
            className={`flex flex-col items-center justify-center ${className}`}
        >
            {children}
        </motion.section>
    )
}

export default function AIImageDetectionLanding() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <Navbar scrollToSection={scrollToSection} />
            <main className="flex-1 pt-14">
                <AnimatedSection className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <motion.div className="space-y-2" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                                    AI-Powered Image Detection
                                </h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Instantly detect and identify people, cups, watches, and chairs in any image with our cutting-edge AI technology.
                                </p>
                            </motion.div>
                            <motion.div className="space-x-4" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                <MotionLink href="/ai" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Try Demo</Button>
                                </MotionLink>
                                <MotionButton
                                    variant="outline"
                                    className="text-primary border-primary hover:bg-primary/10"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More
                                </MotionButton>
                            </motion.div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
                    <div className="container px-4 md:px-6">
                        <motion.h2
                            className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl text-primary"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            Key Features
                        </motion.h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { icon: Users, title: "People Detection", description: "Accurately identify and locate people in images." },
                                { icon: Coffee, title: "Cup Recognition", description: "Detect various types of cups and mugs in photos." },
                                { icon: Watch, title: "Watch Identification", description: "Spot and classify watches in different styles." },
                                { icon: ChairIcon, title: "Chair Detection", description: "Recognize various chair designs in images." }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center text-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                >
                                    <feature.icon className="w-12 h-12 mb-4 text-primary" />
                                    <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
                    <div className="container px-4 md:px-6">
                        <motion.h2
                            className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl text-primary"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            How It Works
                        </motion.h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {[
                                { title: "Turn you cam", description: "Simply turn on your web camera then your set for step 2." },
                                { title: "AI Analysis", description: "Our advanced AI algorithms analyze the image in seconds." },
                                { title: "View Results", description: "Get instant results with highlighted detections and confidence scores." }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center text-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                >
                                    <motion.div
                                        className="flex items-center justify-center w-12 h-12 mb-4 text-xl font-bold rounded-full bg-primary text-primary-foreground"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {index + 1}
                                    </motion.div>
                                    <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection id="contributors" className="w-full py-12 bg-black md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <motion.h2
                            className="mb-12 text-3xl font-bold tracking-tighter text-center sm:text-5xl text-primary"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            Our Contributors
                        </motion.h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {contri.map((person, i) => (
                                <motion.div
                                    key={i}
                                    className="flex flex-col items-center text-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                    }}
                                >
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                        <Avatar className="w-24 h-24 mb-4 duration-300 hover:shadow-sm shadow-white">
                                            <AvatarFallback>{person.name.slice(0, 2)}</AvatarFallback>
                                        </Avatar>
                                    </motion.div>
                                    <h3 className="mb-1 text-lg font-semibold">{person.name}</h3>
                                    <p className="text-sm text-muted-foreground">{person.roll}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="w-full py-12 text-white bg-primary/10 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <motion.div
                                className="space-y-2"
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            >
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Enhance Your Image Analysis?</h2>
                                <p className="mx-auto max-w-[600px] text-white/70 md:text-xl">
                                    Join thousands of businesses already using our AI image detection to streamline their operations.
                                </p>
                            </motion.div>
                            <motion.div
                                className="w-full max-w-sm space-y-2"
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.2 } } }}
                            >
                                <form className="flex space-x-2">
                                    <Input className="flex-1 max-w-lg bg-primary-foreground text-primary" placeholder="Enter your email" type="email" />
                                    <MotionButton
                                        type="submit"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Get Started
                                    </MotionButton>
                                </form>
                                <p className="text-xs text-gray-500">
                                    Start your free trial today. No credit card required.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </AnimatedSection>
            </main>
        </>
    )
}
