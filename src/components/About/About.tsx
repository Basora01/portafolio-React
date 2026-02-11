import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLanguage } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { personalInfo } from '../../data/portfolioData';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <SectionTitle title="Sobre" highlight="Mí" />

                <div className="about-grid">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="image-wrapper">
                            <div className="placeholder-profile">CB</div>
                            <div className="image-border" />
                        </div>

                        {/* Stats Grid */}
                        <motion.div
                            className="stats-grid"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {personalInfo.stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="stat-item"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, borderColor: 'var(--primary-color)' }}
                                >
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>Comprometido con la excelencia.</h3>
                        <p>{personalInfo.bio}</p>
                        <p>{personalInfo.bioExtended}</p>

                        <div className="info-list">
                            <div className="info-item">
                                <FaEnvelope className="info-icon" />
                                <div>
                                    <span className="label">Email</span>
                                    <span className="value">{personalInfo.email}</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaPhone className="info-icon" />
                                <div>
                                    <span className="label">Teléfono</span>
                                    <span className="value">{personalInfo.phone}</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaMapMarkerAlt className="info-icon" />
                                <div>
                                    <span className="label">Ubicación</span>
                                    <span className="value">{personalInfo.location}</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <FaLanguage className="info-icon" />
                                <div>
                                    <span className="label">Idiomas</span>
                                    <span className="value">{personalInfo.languages}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
