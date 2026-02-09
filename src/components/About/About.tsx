import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { personalInfo } from '../../data/portfolioData';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <SectionTitle title="About" highlight="Me" />

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
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>committed to excellence.</h3>
                        <p>{personalInfo.bio}</p>
                        <p>{personalInfo.bioExtended}</p>

                        <div className="info-list">
                            <div className="info-item">
                                <span className="label">Email:</span>
                                <span className="value">{personalInfo.email}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Phone:</span>
                                <span className="value">{personalInfo.phone}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Location:</span>
                                <span className="value">{personalInfo.location}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Languages:</span>
                                <span className="value">{personalInfo.languages}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
