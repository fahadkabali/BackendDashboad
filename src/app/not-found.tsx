'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home, SearchX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full  flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500" />
        <div className="absolute -right-8 -top-8 w-48 h-48 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SearchX className="w-24 h-24 mx-auto text-red-500 mb-6" />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-200 mb-2">Page Not Found</h1>
            <p className="text-gray-500 mb-8">
              We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted,
              or never existed.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
            <Link href="/admin/dashboard">
              <Button className="gap-2 bg-red-500 hover:bg-red-600 w-full">
                <Home className="w-4 h-4" />
                Return to Dashboard
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500">
              Need assistance? Contact{' '}
              <Link 
                href="/admin/support" 
                className="text-red-500 hover:text-red-600 font-medium"
              >
                Admin Support
              </Link>
            </p>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}