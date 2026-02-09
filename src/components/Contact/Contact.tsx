import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import SectionTitle from '../common/SectionTitle';
import GlowButton from '../common/GlowButton';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
    };

    const contactCards = [
        {
            icon: <FaEnvelope />,
            title: 'Email Me',
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`
        },
        {
            icon: <FaWhatsapp />,
            title: 'WhatsApp',
            value: `+1 (${personalInfo.phone.replace('-', ') ').replace('-', '-')}`,
            href: `https://wa.me/1${personalInfo.phone.replace(/-/g, '')}`
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            value: personalInfo.location,
            href: null
        }
    ];

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <SectionTitle title="Get In" highlight="Touch" />
                <motion.p
                    className="contact-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Let's discuss your next project.
                </motion.p>

                <div className="contact-wrapper">
                    <motion.div
                        className="contact-options"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {contactCards.map((card, index) => {
                            const CardWrapper = card.href ? 'a' : 'div';
                            const cardProps = card.href ? {
                                href: card.href,
                                target: card.href.startsWith('http') ? '_blank' : undefined,
                                rel: card.href.startsWith('http') ? 'noopener noreferrer' : undefined
                            } : {};

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <CardWrapper className="contact-card" {...cardProps}>
                                        <div className="icon-box">{card.icon}</div>
                                        <div>
                                            <h4>{card.title}</h4>
                                            <p>{card.value}</p>
                                        </div>
                                    </CardWrapper>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <GlowButton type="submit" variant="primary">
                            Send Message
                        </GlowButton>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
