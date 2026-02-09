import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaLinkedinIn />, href: personalInfo.social.linkedin },
        { icon: <FaGithub />, href: personalInfo.social.github },
        { icon: <FaInstagram />, href: personalInfo.social.instagram }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-logo">
                        CBR<span className="gold-dot">.</span>
                    </div>

                    <p>&copy; {currentYear} {personalInfo.fullName}. All Rights Reserved.</p>

                    <div className="social-links">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: 'var(--primary-color)',
                                    color: 'var(--bg-color)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
