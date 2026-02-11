import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { experiences } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <SectionTitle title="Experiencia" highlight="Laboral" />

                <div className="timeline">
                    <motion.div
                        className="timeline-line"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -50 : 50
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <motion.div
                                className="timeline-dot"
                                whileInView={{
                                    boxShadow: [
                                        '0 0 0 rgba(212, 175, 55, 0)',
                                        '0 0 20px rgba(212, 175, 55, 0.5)',
                                        '0 0 0 rgba(212, 175, 55, 0)'
                                    ]
                                }}
                                transition={{
                                    delay: 0.5 + index * 0.2,
                                    duration: 1
                                }}
                            />
                            <div className="timeline-date">{exp.period}</div>
                            <div className="timeline-content">
                                <h3>{exp.company}</h3>
                                <h4>{exp.role}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
