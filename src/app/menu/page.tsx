import styles from "./MenuPage.module.css";
import Image from "next/image";

export default function MenuPage() {
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

          <div className={`${styles.headerTextContainer} contauner w-full mb-10`}>
            <div className={styles.headerText}>
              <h1 className={styles.restaurantName}>CMSRestaurant Rivoli</h1>
              <p className={styles.restaurantAddress}>
                15 Rue de Rivoli, 75001 Paris
              </p>
              <p className={styles.restaurantHours}>
                Lundi - Samedi : 10:30 - 21:00 | Dimanche : 12:00 - 21:00
              </p>
              <a href="#" className={styles.changeAddress}>
                Changer l'adresse
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

        <div className={styles.itemsGrid}>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/01.jpg"
              alt="Créer votre propre bol de poke"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>Créer votre propre bol de poke</h3>
            <div className={styles.containerBottom}>
              <p className={styles.itemPrice}>€20</p>
              <button className={styles.addToCartButton}>
                Ajouter au panier
              </button>
            </div>
          </div>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/02.jpg"
              alt="01"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>Rainbow Bowl</h3>
            <div className={styles.containerBottom}>              
                <p className={styles.itemPrice}>€18</p>
                <button className={styles.addToCartButton}>
                Ajouter au panier
                </button>
            </div>
          </div>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/03.jpg"
              alt="3"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>Volcano Bowl</h3>
            <div className={styles.containerBottom}>
                <p className={styles.itemPrice}>€15</p>
                <button className={styles.addToCartButton}>
                Ajouter au panier
                </button>
            </div>
          </div>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/04.jpg"
              alt="4"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>Tuna Lover's Bowl</h3>
            <div className={styles.containerBottom}>              
                <p className={styles.itemPrice}>€20</p>
                <button className={styles.addToCartButton}>
                Ajouter au panier
                </button>
            </div>
          </div>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/05.jpg"
              alt="5"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>Dynamite Bowl</h3>
            <div className={styles.containerBottom}>
                <p className={styles.itemPrice}>€12</p>
                <button className={styles.addToCartButton}>
                Ajouter au panier
                </button>      
            </div>
          </div>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/06.jpg"
              alt="6"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>The Duke Bowl</h3>
            <div className={styles.containerBottom}>
                <p className={styles.itemPrice}>€16</p>
                <button className={styles.addToCartButton}>
                Ajouter au panier
                </button>      
            </div>
          </div>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/07.jpg"
              alt="7"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>The Duke Bowl</h3>
            <div className={styles.containerBottom}>
                <p className={styles.itemPrice}>€16</p>
                <button className={styles.addToCartButton}>
                Ajouter au panier
                </button>
                          
            </div>
          </div>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/08.jpg"
              alt="8"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>The Duke Bowl</h3>
            <p className={styles.itemPrice}>€16</p>
            <button className={styles.addToCartButton}>
              Ajouter au panier
            </button>
          </div>
        </div>
      </section>

      <section className={styles.drinksSection}>
        <h2 className={styles.sectionTitle}>Boissons</h2>
        <div className={styles.itemsGrid}>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/b-01.jpg"
              alt="Coca Cola"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>Coca Cola</h3>
            <div className={styles.containerBottom}>
                <p className={styles.itemPrice}>€2</p>
                <button className={styles.addToCartButton}>
                Ajouter au panier
                </button>           
            </div>
          </div>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/b-02.jpg"
              alt="Eau"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>Eau</h3>
            <p className={styles.itemPrice}>€2</p>
            <button className={styles.addToCartButton}>
              Ajouter au panier
            </button>
          </div>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/b-03.jpg"
              alt="Tea Glacé"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>Tea Glacé</h3>
            <p className={styles.itemPrice}>€2</p>
            <button className={styles.addToCartButton}>
              Ajouter au panier
            </button>
          </div>
          <div className={styles.menuItem}>
            <Image
              src="/menuImage/b-04.jpg"
              alt="Limonade"
              className={styles.menuItemImage}
              width={200}
              height={200}
            />
            <h3 className={styles.itemTitle}>Limonade</h3>
            <p className={styles.itemPrice}>€2</p>
            <button className={styles.addToCartButton}>
              Ajouter au panier
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
