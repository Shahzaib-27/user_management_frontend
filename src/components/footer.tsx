import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className=" border-t border-white/10 bg-slate-950  text-white">

      <div className="mx-auto max-w-6xl px-4 py-4">
        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className=" m-4 border-t border-white/10 pt-2 pb-2 text-center ">
          <p className="flex items-center justify-center gap-1 text-1xl text-white/80 ">
            © {new Date().getFullYear()} All Right Reserved
          </p>
        </motion.div>

      </div>
    </motion.footer>
  );
}