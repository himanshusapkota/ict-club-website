"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How can I join the ICT Club?",
    answer:
      "You can join the ICT Club by attending our orientation sessions held at the beginning of each semester. Simply fill out the membership form at membership.ictkalika.tech and participate in our activities. We welcome students from all backgrounds who are passionate about technology.",
  },
  {
    question: "What activities does the club organize?",
    answer:
      "We organize a wide range of activities including workshops on programming languages, web development seminars, AI/ML sessions, coding competitions, hackathons, tech talks by industry experts, and collaborative projects. We also participate in inter-college competitions and organize annual tech fests.",
  },
  {
    question: "Do I need prior programming experience to join?",
    answer:
      "Not at all! We welcome members of all skill levels, from complete beginners to advanced programmers. Our club provides learning opportunities for everyone, with mentorship programs and beginner-friendly workshops to help you get started.",
  },
  {
    question: "What are the membership fees?",
    answer:
      "The annual membership fee is minimal and covers club activities, resources, and event participation.",
  },
  {
    question: "How often does the club meet?",
    answer:
      "We have regular weekly meetings on the 1st and 3rd Friday of each month, along with special sessions for workshops and events. The schedule is flexible and announced in advance through our communication channels.",
  },
  {
    question: "Can I propose my own project or workshop?",
    answer:
      "We encourage members to propose their own projects, workshop topics, or event ideas. Our club thrives on member initiatives and we provide support and resources to help bring your ideas to life.",
  },
  {
    question: "What career opportunities does the club provide?",
    answer:
      "The club offers networking opportunities with alumni working in top tech industries, internship referrals, career guidance sessions, resume building workshops, and connections with industry professionals. Many of our alumni have secured positions at leading technology companies.",
  },
  {
    question: "How can I stay updated with club activities?",
    answer:
      "You can stay updated through our official email list (ictkalika82@gmail.com), social media channels, and our club website. We also have a discord server for members and send regular newsletters about upcoming events and opportunities.",
  },
]

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 glow-text">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about joining and participating in the ICT Club
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-[#9bd3ff]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#9bd3ff]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        className="px-6 pb-6 border-t border-white/10"
                      >
                        <div className="pt-4">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="card-glow rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 glow-text">Still have questions?</h3>
              <p className="text-gray-300 mb-6">Feel free to reach out to us directly. We're here to help!</p>
              <a
                href="mailto:ictkalika82@gmail.com"
                className="bg-[#5bbcff] hover:bg-[#4aa3e6] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 glow-button inline-block"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
