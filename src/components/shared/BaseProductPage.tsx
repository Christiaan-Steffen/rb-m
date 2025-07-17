@@ .. @@
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="pt-6 space-y-4"
               >
-                <Button to="/contact" variant="primary" size="lg" className="w-full">
+                <Button scrollTo="/contact#get-quote" variant="primary" size="lg" className="w-full">
                   Get Team Quote
                 </Button>
                 <Button to="/contact" variant="outline" size="lg" className="w-full">