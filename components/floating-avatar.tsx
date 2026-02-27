'use client';

import { motion, AnimatePresence } from 'motion/react';
import dynamic from 'next/dynamic';

const FloatingAvatar = () => {
  return <AnimatePresence></AnimatePresence>;
};

export default dynamic(() => Promise.resolve(FloatingAvatar), {
  ssr: false,
});
