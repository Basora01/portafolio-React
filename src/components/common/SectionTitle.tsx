import { motion } from 'framer-motion';
import './SectionTitle.css';

interface SectionTitleProps {
    title: string;
    highlight: string;
    centered?: boolean;
}

const SectionTitle = ({ title, highlight, centered = false }: SectionTitleProps) => {
    return (
        <motion.h2
            className={`section-title ${centered ? 'centered' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {title} <span className="gold-text">{highlight}</span>
        </motion.h2>
    );
};

export default SectionTitle;
