import Image from "next/image";
import styles from "./HomePage.module.css";

import TrouverSuivez from "./components/TrouverSuivez";

export default function Home() {
  return (
    <div className={styles.homepageContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} mb-14 `}>Bols Inspirés Libanais</h1>
          <p className={styles.heroSubtitle}>Frais, sain, délicieux</p>
          <a href="/order" className={styles.heroButton}>
            Commander maintenant
          </a>
        </div>
      </section>

      <section className={styles.introSection}>
        <h2 className={styles.introTitle}>C'est quoi CMS Restaurant</h2>
        <p className={styles.introText}>
          CMS Restaurant offre une expérience culinaire unique en fusionnant des
          saveurs traditionnelles et modernes. Nos plats sont préparés avec des
          ingrédients frais et de qualité pour vous garantir une satisfaction
          totale.
        </p>
      </section>

      <section className={styles.signatureBowlsSection}>
        <h2 className={`${styles.sectionTitle} text-center`}>Bols Signature</h2>
        
        <div className={styles.bowlsContainer}>
          <div className={styles.bowlCard}>
            <Image
              src="/homeImages/cali.jpg"
              alt="California Crunch Bowl"
              width={300}
              height={300}
              className={styles.bowlImage}
            />
            <h3 className={styles.bowlTitle}>California Crunch Bowl</h3>
            <p className={styles.bowlDescription}>
              Crèvettes, Crabe, Concombre, Avocat...
            </p>
            <a href="/order" className={styles.bowlButton}>
              Commander maintenant
            </a>
          </div>
          <div className={styles.bowlCard}>
            <Image
              src="/homeImages/rainb.jpg"
              alt="Rainbow Bowl"
              className={styles.bowlImage}
              layout="responsive"
              width={500}
              height={300}
            />
            <h3 className={styles.bowlTitle}>Rainbow Bowl</h3>
            <p className={styles.bowlDescription}>
              Saumon épicé, Avocat, Concombre...
            </p>
            <a href="/order" className={styles.bowlButton}>
              Commander maintenant
            </a>
          </div>
          <div className={styles.bowlCard}>
            <Image
              src="/homeImages/volc.jpg"
              alt="Volcano Bowl"
              className={styles.bowlImage}
              layout="responsive"
              width={500}
              height={300}
            />
            <h3 className={styles.bowlTitle}>Tuna lover's Bowl</h3>
            <p className={styles.bowlDescription}>
              Thon épicé, Saumon épicé, Concombre...
            </p>
            <a href="/order" className={styles.bowlButton}>
              Commander maintenant
            </a>
          </div>
          <div className={styles.bowlCard}>
            <Image
              src="/homeImages/tun.jpg"
              alt="Volcano Bowl"
              className={styles.bowlImage}
              layout="responsive"
              width={500}
              height={300}
            />
            <h3 className={styles.bowlTitle}>Volcano Bowl</h3>
            <p className={styles.bowlDescription}>
              Thon épicé, Choux, Jalapenos...
            </p>
            <a href="/order" className={styles.bowlButton}>
              Commander maintenant
            </a>
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialCard}>
          <h2 className={styles.sectionTitle}>Nos clients satisfaits</h2>
          <p className={styles.testimonialText}>
            Je suis un fervent adepte des bols, et cet endroit est vraiment
            précieux. Les ingrédients sont de qualité supérieure, et la variété
            des garnitures vous permet de personnaliser votre bol.
          </p>
          <p className={styles.testimonialAuthor}>Lauren Martinez</p>
          <div className={styles.testimonialImages}>
            <Image
              src="/homeImages/av_01.jpg"
              alt="Client"
              layout="responsive"
              width={300}
              height={300}
            />
            <Image
              src="/homeImages/av_02.jpg"
              alt="Client"
              layout="responsive"
              width={300}
              height={300}
            />
            <Image
              src="/homeImages/av_03.jpg"
              alt="Client"
              layout="responsive"
              width={300}
              height={300}
            />
            <Image
              src="/homeImages/av_04.jpg"
              alt="Client"
              layout="responsive"
              width={300}
              height={300}
            />
            <Image
              src="/homeImages/fl_01.jpg"
              alt="Client"
              layout="responsive"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className={styles.testimonialCard}>
          <Image
            src="/homeImages/tem_img.jpg"
            alt="tem"
            layout="responsive"
            width={300}
            height={300}
          />
        </div>
      </section>

      <TrouverSuivez />
    </div>
  );
}
