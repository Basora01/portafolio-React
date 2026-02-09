import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { technicalSkills, professionalSkills } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section skills dark-bg">
            <div className="container">
                <SectionTitle title="My" highlight="Skills" />

                <div className="skills-wrapper">
                    <motion.div
                        className="skills-column"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Technical Skills</h3>

                        {technicalSkills.map((skill, index) => (
                            <div className="skill-item" key={skill.name}>
                                <div className="skill-info">
                                    <span>{skill.name}</span>
                                    <span>{skill.percentage}%</span>
                                </div>
                                <div className="progress-bar">
                                    <motion.div
                                        className="progress"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percentage}%` }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 1.2,
                                            delay: 0.2 + (index * 0.1),
                                            ease: 'easeOut'
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="skills-column"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>Professional Skills</h3>

                        <div className="skill-tags">
                            {professionalSkills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    className="skill-tag"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: 'var(--primary-color)',
                                        color: 'var(--primary-color)'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
