import { motion } from 'framer-motion';
import { FaDownload, FaChevronDown } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import GlowButton from '../common/GlowButton';
import { personalInfo } from '../../data/portfolioData';
import './Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <section id="home" className="hero">
            <ParticlesBackground />

            <div className="hero-gradient" />

            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span className="hero-subtitle" variants={itemVariants}>
                    Hello, I'm
                </motion.span>

                <motion.h1 className="hero-title" variants={itemVariants}>
                    {personalInfo.name}
                </motion.h1>

                <motion.h2 className="hero-role" variants={itemVariants}>
                    Software Engineer <span className="gold-text">&</span> Developer
                </motion.h2>

                <motion.p className="hero-description" variants={itemVariants}>
                    Specializing in building exceptional digital experiences.
                    Focused on .NET, Python, and creating intuitive, dynamic interfaces.
                </motion.p>

                <motion.div className="hero-buttons" variants={itemVariants}>
                    <GlowButton href="#projects" variant="primary">
                        View My Work
                    </GlowButton>
                    <GlowButton href="/CV_Carlos_Basora.pdf" variant="secondary" download>
                        <FaDownload /> Download CV
                    </GlowButton>
                </motion.div>
            </motion.div>

            {/* Floating Shapes */}
            <div className="hero-visual">
                <div className="glow-circle" />
                <motion.div
                    className="floating-shapes"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    <div className="shape shape-1" />
                    <div className="shape shape-2" />
                    <div className="shape shape-3" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.a
                href="#about"
                className="scroll-down"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <span>Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <FaChevronDown />
                </motion.div>
            </motion.a>
        </section>
    );
};

export default Hero;
