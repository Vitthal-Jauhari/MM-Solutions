"use client"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface SuccessAnimationProps {
  message?: string
}

export default function SuccessAnimation({ message = "Form submitted successfully!" }: SuccessAnimationProps) {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
        className="bg-green-100 rounded-full p-4 mb-6"
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }}>
          <CheckCircle className="h-16 w-16 text-green-600" />
        </motion.div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-2xl font-bold text-[#033097] mb-2"
      >
        Thank You!
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="text-gray-600 mb-6"
      >
        {message}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="text-sm text-gray-500"
      >
        Our team will contact you shortly.
      </motion.div>
    </div>
  )
}
