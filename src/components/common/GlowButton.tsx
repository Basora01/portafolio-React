import { motion } from 'framer-motion';
import './GlowButton.css';

interface GlowButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    href?: string;
    onClick?: () => void;
    download?: boolean;
    className?: string;
    type?: 'button' | 'submit';
}

const GlowButton = ({
    children,
    variant = 'primary',
    href,
    onClick,
    download,
    className = '',
    type = 'button'
}: GlowButtonProps) => {
    const buttonClass = `glow-btn ${variant} ${className}`;

    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.02,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.98 }
    };

    if (href) {
        return (
            <motion.a
                href={href}
                className={buttonClass}
                download={download}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
                <span className="glow-btn-bg" />
                <span className="glow-btn-content">{children}</span>
            </motion.a>
        );
    }

    return (
        <motion.button
            className={buttonClass}
            onClick={onClick}
            type={type}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
        >
            <span className="glow-btn-bg" />
            <span className="glow-btn-content">{children}</span>
        </motion.button>
    );
};

export default GlowButton;
