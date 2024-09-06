"use client"; 

import React from 'react'
import styles from './About.module.css';
import Image from 'next/image';

function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Notre histoire commence</h1>
          <p>
            Chez Poke Now, nous croyons que la restauration rapide doit être
            fraîche. De nos ingrédients premium à notre service exceptionnel,
            manger sainement n&apos;a jamais été aussi facile—ou aussi agréable!
          </p>
          <a href="#" className={styles.ctaButton}>
            Commander maintenant
          </a>
        </div>
      </section>

      <section className={styles.story}>
        <h2>Héritage Traditionnel, Résultat Moderne</h2>
        <p>
          Une des raisons de la popularité du poke est sa polyvalence. Alors que
          la version traditionnelle reste un favori, il existe maintenant de
          nombreuses variations permettant aux gens de personnaliser leurs bols
          de poke selon leurs préférences.
        </p>
      </section>

      <section className={styles.restaurants}>
        <div className={styles.restaurantsContent}>
          <h2>Trouver nos restaurants</h2>
          <p>
            Nous servons du poisson frais quotidiennement aux endroits suivants
            : Boston Harbor Islands, Boylston St, Congress St.
          </p>
          <a href="#" className={styles.ctaButton}>
            Localisations et horaires
          </a>
        </div>
      </section>

      <section className={styles.social}>
        <div className={styles.socialContent}>
          <h2>Suivez-nous</h2>
          <p>
            Pour rester informé des dernières nouvelles, promotions et offres de
            notre restaurant, assurez-vous de nous suivre sur les réseaux
            sociaux. Ne manquez aucune mise à jour.
          </p>
          <div className={styles.socialIcons}>
            <a href="#">
              <Image 
              width={500}
              height={500}
              src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#">
              <Image 
              width={500}
              height={500}
              src="twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#">
              <Image 
              width={500}
              height={500}
              src="youtube-icon.png" alt="YouTube" />
            </a>
            <a href="#">
              <Image 
              width={500}
              height={500}
              src="linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About