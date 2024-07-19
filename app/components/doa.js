import { motion } from "framer-motion";

export default function Doa() {
  return (
    <div className="h-auto bg-pinkLighter lg:hidden md:hidden">
      <div className="flex justify-center p-10">
        <motion.div
          className="text-center"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut"}}
        >
          <p className="text-white text-sm font-serif">
            "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu apa
            yang telah dipersatukan Allah tidak boleh diceraikan manusia”
          </p>
          <p className="text-white text-sm font-serif mt-2">
            {"(Matius 19:6)"}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
