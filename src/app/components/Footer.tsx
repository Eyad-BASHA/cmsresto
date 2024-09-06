import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoSection}>
          <div className={styles.footerLogo}>
            <Image
              src="/logo-footer.png"
              alt="CMS Restaurant Logo"
              className={styles.footerLogoImage}
              // layout="fill"
              width={150}
              height={150}
            />
            <h2 className={styles.footerTitle}>CMS Restaurant</h2>
          </div>
          <nav className={styles.footerNav}>
            <ul className={styles.footerNavList}>
              <li className={styles.footerNavItem}>
                <a href="/" className={styles.footerNavLink}>
                  Menu
                </a>
              </li>
              <li className={styles.footerNavItem}>
                <a href="/about" className={styles.footerNavLink}>
                  Notre histoire
                </a>
              </li>
              <li className={styles.footerNavItem}>
                <a href="/locations" className={styles.footerNavLink}>
                  Localisation
                </a>
              </li>
              <li className={styles.footerNavItem}>
                <a href="/gift-card" className={styles.footerNavLink}>
                  Carte cadeau
                </a>
              </li>
            </ul>
          </nav>
          <p className={styles.footerCopyright}>
            &copy; 2024 CMS Restaurant. All rights reserved.
          </p>
        </div>
        <div className={styles.footerContactSection}>
          <div className={styles.footerBtnContainer} >
            <a href="/menu" className={styles.orderButton}>
              Commander en ligne
            </a>
            <a href="/reservation" className={styles.reserveButton}>
              Réserver une table
            </a>
          </div>
          <p className={styles.footerContactItem}>
            4 square Georgette Agutte, Saint-Gratien, France
          </p>
          <p className={styles.footerContactItem}>info@cms-restaurant.com</p>
          <div className={styles.footerSocial}>
            <a href="https://twitter.com" className={styles.footerSocialLink}>
              <Image
                src="/reseau/twitter-circled.svg"
                alt="Twitter"
                width={30}
                height={30}
              />
            </a>
            <a href="https://facebook.com" className={styles.footerSocialLink}>
              <Image
                src="/reseau/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="https://linkedin.com" className={styles.footerSocialLink}>
              <Image
                src="/reseau/instagram.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a href="https://youtube.com" className={styles.footerSocialLink}>
              <Image
                src="/reseau/youtube-music.svg"
                alt="YouTube"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
