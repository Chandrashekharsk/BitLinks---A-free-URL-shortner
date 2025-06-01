// app/page.tsx or pages/index.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link2, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20 text-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Simplify Your Links with <span className="text-blue-600">BitLinks</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Shorten, customize, and track your URLs — all in one place. Fast, secure, and free.
          </p>
          <Button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-4 text-lg rounded-full">
            <Link href="/shorten">Try Now</Link>
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-20 py-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Link2 className="text-blue-500 w-10 h-10" />,
            title: 'Instant Short Links',
            desc: 'Generate short, clean URLs in seconds. No sign-up required.'
          },
          {
            icon: <Clock className="text-orange-500 w-10 h-10" />,
            title: 'Real-Time Analytics',
            desc: 'Track clicks, countries, devices and more — all in real time.'
          },
          {
            icon: <ShieldCheck className="text-green-500 w-10 h-10" />,
            title: 'Secure & Spam-Free',
            desc: 'We scan and filter malicious links to protect your visitors.'
          }
        ].map((feature, idx) => (
          <Card key={idx} className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              quote: 'I use BitLinks daily for sharing links on social media. It’s so fast and reliable!',
              author: 'Neha, Content Creator'
            },
            {
              quote: 'Finally found a URL shortener that’s both beautiful and powerful.',
              author: 'Rajat, Marketing Manager'
            },
            {
              quote: 'The click analytics help me understand my audience like never before.',
              author: 'Aditya, Blogger'
            }
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 rounded-xl shadow p-6"
            >
              <p className="text-gray-800 italic mb-4">“{t.quote}”</p>
              <p className="text-sm font-medium text-gray-600">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-20 py-20 text-center bg-blue-50">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Start Shortening Smarter</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of users who’ve trimmed millions of links. No setup required.
          </p>

<Button asChild className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-4 text-lg rounded-full">
 <a
    href="https://portfolio-app-chandrashekhars-projects-d80f3903.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
  > About the Developer </a>
</Button>


        </motion.div>
      </section>
    </main>
  );
}
