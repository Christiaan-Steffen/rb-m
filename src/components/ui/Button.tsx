@@ .. @@
 import React from 'react';
 import { Link } from 'react-router-dom';
+import { useNavigate } from 'react-router-dom';
 import { motion } from 'framer-motion';
 
 interface ButtonProps {
   children: React.ReactNode;
   to?: string;
   href?: string;
+  scrollTo?: string;
   variant?: 'primary' | 'secondary' | 'outline';
   size?: 'sm' | 'md' | 'lg';
   className?: string;
@@ .. @@
 const Button: React.FC<ButtonProps> = ({
   children,
   to,
   href,
+  scrollTo,
   variant = 'primary',
   size = 'md',
   className = '',
@@ .. @@
   disabled = false,
 }) => {
+  const navigate = useNavigate();
   const baseClasses = 'font-bebas tracking-wider inline-flex items-center justify-center transition-all duration-300';
   
   const variantClasses = {
@@ .. @@
     tap: { scale: 0.95 },
   };
   
+  // Handle scroll to section
+  const handleScrollTo = () => {
+    if (scrollTo) {
+      if (scrollTo.startsWith('/')) {
+        // Navigate to page and then scroll
+        const [path, anchor] = scrollTo.split('#');
+        navigate(path);
+        setTimeout(() => {
+          if (anchor) {
+            const element = document.getElementById(anchor);
+            if (element) {
+              element.scrollIntoView({ behavior: 'smooth' });
+            }
+          }
+        }, 100);
+      } else {
+        // Scroll to element on current page
+        const element = document.getElementById(scrollTo);
+        if (element) {
+          element.scrollIntoView({ behavior: 'smooth' });
+        }
+      }
+    }
+  };
+  
   if (to) {
     return (
       <motion.div
@@ .. @@
       </motion.div>
     );
   }
   
+  if (scrollTo) {
+    return (
+      <motion.button
+        type={type}
+        className={buttonClasses}
+        onClick={handleScrollTo}
+        disabled={disabled}
+        whileHover={disabled ? {} : "hover"}
+        whileTap={disabled ? {} : "tap"}
+        variants={buttonVariants}
+      >
+        {children}
+      </motion.button>
+    );
+  }
+  
   if (href) {
     return (
       <motion.div