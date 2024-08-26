import React from 'react';
import styles from './Contact.module.css';

const ContactPage: React.FC = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.contactTitle}>Contactez-nous</h1>

            <div className={styles.contactInfo}>
                <div className={styles.contactDetails}>
                    <h2>Informations de contact</h2>
                    <p><strong>Adresse:</strong> 123 Rue de la Paix, Paris, France</p>
                    <p><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
                    <p><strong>Email:</strong> info@cmsrestaurant.com</p>
                </div>

                <div className={styles.contactMap}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.990253764337!2d2.292292515674338!3d48.858844379287085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fef5e28cc71%3A0x40b82c3688c9460!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1613987429455!5m2!1sen!2sfr" 
                        width="100%" 
                        height="300" 
                        allowFullScreen={true} 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div className={styles.contactForm}>
                <h2>Envoyez-nous un message</h2>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>Envoyer</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
