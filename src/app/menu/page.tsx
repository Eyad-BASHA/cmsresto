// src/app/menu/page.tsx
"use client"; // Ceci indique que ce composant est un composant client

import { useState, useEffect } from "react";
import styles from "./MenuPage.module.css";
import Image from "next/image";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  first_photo: string;
};

type Category = {
  id: number;
  name: string;
  order: number;
  items: MenuItem[];
};

export default function MenuPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const res = await fetch(
          `${siteUrl}/restaurant/menu-items-by-category/`,
        );
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMenuItems();
  }, [siteUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.menuPageContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Image
            src="/menuImage/menuHero.jpg"
            alt="Restaurant"
            className={styles.headerImage}
            layout="responsive"
            width={1000}
            height={400}
          />
          <div
            className={`${styles.headerTextContainer} container w-full mb-10`}>
            <div className={styles.headerText}>
              <h1 className={styles.restaurantName}>CMSRestaurant Rivoli</h1>
              <p className={styles.restaurantAddress}>
                15 Rue de Rivoli, 75001 Paris
              </p>
              <p className={styles.restaurantHours}>
                Lundi - Samedi : 10:30 - 21:00 | Dimanche : 12:00 - 21:00
              </p>
              <a href="#" className={styles.changeAddress}>
                Changer l&apos;adresse
              </a>
            </div>
            <div className={styles.orderOptions}>
              <button className={styles.orderButton}>Livraison</button>
              <button className={styles.orderButton}>À emporter</button>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Notre Menu</h2>

        {categories.map((category) => (
          <div key={category.id} className={styles.categorySection}>
            <div className={styles.itemsGrid}>
              {category.items.map((item) => (
                <div key={item.id} className={styles.menuItem}>
                  <span className={styles.categoryTitle}>{category.name}</span>
                  <Image
                    src={item.first_photo}
                    alt={item.name}
                    className={styles.menuItemImage}
                    width={200}
                    height={200}
                    unoptimized={true}
                  />
                  <h4 className={styles.itemTitle}>{item.name}</h4>
                  <div className={styles.containerBottom}>
                    <p className={styles.itemPrice}>€{item.price}</p>
                    <button className={styles.addToCartButton}>
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
