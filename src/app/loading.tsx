'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 relative overflow-hidden">
        {/* Animated gradient border */}
        <div className="absolute inset-0 border-2 border-transparent animate-border-flow bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]" />

        {/* Background blur effects */}
        <div className="absolute -right-8 -top-8 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative space-y-6">
          {/* Main loader animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center"
          >
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-3"
          >
            <h2 className="text-xl font-semibold text-gray-900">Loading</h2>
            <p className="text-sm text-gray-500">
              Please wait while we prepare your dashboard
            </p>
          </motion.div>

          {/* Loading bars */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
              <div className="flex-1 h-2 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
              <div className="flex-1 h-2 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
              <div className="flex-1 h-2 bg-gray-200 rounded animate-pulse" />
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}