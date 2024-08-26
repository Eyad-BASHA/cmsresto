import React from 'react'
import Image from 'next/image'
import styles from "./TrouverSuivez.module.css";

function TrouverSuivez() {
  return (
    <>
      <div className={`bg-white pb-10`}>
        <section
          className={`${styles.restaurantSection} container mx-auto px-12`}>
          <div className={styles.restaurantContent}>
            <h2 className={styles.sectionTitle}>Trouver nos restaurants</h2>
            <p className={styles.restaurantText}>
              Nous servons des plats frais quotidiennement dans les lieux
              suivants : Boston Harbor Islands, Boylston St, Congress St,
              Kendall Square, Cambridge St, Haviland St.
            </p>
            <a href="/locations" className={styles.restaurantButton}>
              Localisations et horaires
            </a>
          </div>
          <div className={styles.restaurantImages}>
            <Image
              src="/homeImages/tr-n_01.jpg"
              alt="Restaurant 1"
              layout="responsive"
              width={500}
              height={300}
              className={`${styles.restaurantImage} mt-24`}
            />
            <Image
              src="/homeImages/tr-n_02.jpg"
              alt="Restaurant 2"
              layout="responsive"
              width={500}
              height={300}
              className={styles.restaurantImage}
            />
          </div>
        </section>
      </div>

      <section className={styles.followUsSection}>
        <div className={styles.folloUsText}>
          <h2 className={styles.sectionTitle}>Suivez-nous</h2>
          <p className={styles.followUsText}>@pokebarboston</p>
          <p className={`${styles.followUsDescription} mt-5`}>
            Pour rester informé des dernières nouvelles, promotions et offres de
            notre restaurant, assurez-vous de nous suivre sur les réseaux
            sociaux. Ne manquez aucune mise à jour.
          </p>
          <div className={`${styles.socialLinks} mt-20`}>
            <a href="https://twitter.com" className={styles.socialLink}>
              <Image
                src="/reseau/twitter-circled.svg"
                layout="responsive"
                width={30}
                height={30}
                alt="Twitter"
              />
            </a>
            <a href="https://facebook.com" className={styles.socialLink}>
              <Image
                src="/reseau/facebook.svg"
                layout="responsive"
                width={30}
                height={30}
                alt="Facebook"
              />
            </a>
            <a href="https://youtube.com" className={styles.socialLink}>
              <Image
                src="/reseau/youtube-music.svg"
                layout="responsive"
                width={30}
                height={30}
                alt="YouTube"
              />
            </a>
            <a href="https://instagram.com" className={styles.socialLink}>
              <Image
                src="/reseau/instagram.svg"
                layout="responsive"
                width={30}
                height={30}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        <div className={styles.followUsImages}>
          <Image
            src="/homeImages/galerie_01.jpg"
            alt="galerie 1"
            className={styles.followImage}
            layout="responsive"
            width={500}
            height={500}
          />
          <Image
            src="/homeImages/galerie_02.jpg"
            alt="galerie 2"
            className={styles.followImage}
            layout="responsive"
            width={500}
            height={500}
          />
          <Image
            src="/homeImages/galerie_03.jpg"
            alt="galerie 3"
            className={styles.followImage}
            layout="responsive"
            width={500}
            height={500}
          />
          <Image
            src="/homeImages/galerie_04.jpg"
            alt="galerie 4"
            className={styles.followImage}
            layout="responsive"
            width={500}
            height={500}
          />
          <Image
            src="/homeImages/galerie_05.jpg"
            alt="galerie 5"
            className={styles.followImage}
            layout="responsive"
            width={500}
            height={500}
          />
          <Image
            src="/homeImages/galerie_06.jpg"
            alt="galerie 6"
            className={styles.followImage}
            layout="responsive"
            width={500}
            height={500}
          />
          <Image
            src="/homeImages/galerie_07.jpg"
            alt="galerie 7"
            className={styles.followImage}
            layout="responsive"
            width={500}
            height={500}
          />
          <Image
            src="/homeImages/galerie_08.jpg"
            alt="galerie 8"
            className={styles.followImage}
            layout="responsive"
            width={500}
            height={500}
          />
          <Image
            src="/homeImages/galerie_09.jpg"
            alt="galerie 9"
            className={styles.followImage}
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
      </section>
    </>
  );
}

export default TrouverSuivez