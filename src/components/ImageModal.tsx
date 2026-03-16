import { motion, AnimatePresence } from "framer-motion";

interface ImageModalProps {
  isOpen: boolean;
  image: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, image, onClose }: ImageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)", display: "flex",
            justifyContent: "center", alignItems: "center", zIndex: 2000,
            cursor: "zoom-out", padding: "20px"
          }}
        >
          <motion.img
            src={image}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{ 
                maxWidth: "100%", maxHeight: "100%", 
                borderRadius: "12px", boxShadow: "0 0 30px rgba(0,0,0,0.5)" 
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}