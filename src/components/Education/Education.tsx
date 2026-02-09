import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaAward } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { education, certifications } from '../../data/portfolioData';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="section education dark-bg">
            <div className="container">
                <SectionTitle title="Education &" highlight="Certifications" centered />

                <div className="edu-grid">
                    <motion.div
                        className="edu-column"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>
                            <FaGraduationCap className="gold-text" />
                            Education
                        </h3>

                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                className="edu-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                whileHover={{ x: 5 }}
                            >
                                <h4>{edu.degree}</h4>
                                <span className="institution">
                                    {edu.institution}
                                    {edu.year && ` (${edu.year})`}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="edu-column"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>
                            <FaCertificate className="gold-text" />
                            Certifications
                        </h3>

                        <div className="cert-list">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    className="cert-item"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    whileHover={{ x: 5 }}
                                >
                                    <FaAward className="cert-icon" />
                                    <div>
                                        <h4>{cert.name}</h4>
                                        <span>
                                            {cert.issuer}
                                            {cert.year && ` (${cert.year})`}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
