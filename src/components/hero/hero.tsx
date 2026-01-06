import Image from "next/image";
import styles from "./hero.module.css";

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage: string;
  backgroundAlt: string;
  children?: React.ReactNode;
}

export const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundAlt,
  children,
}: HeroProps) => (
  <section className={styles.hero}>
    <div className={styles.background}>
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        priority
        className={styles.image}
      />
    </div>

    <div className={styles.content}>
      <h1 className={styles.title}>
        {title}
        {subtitle && (
          <>
            <br />
            {subtitle}
          </>
        )}
      </h1>
      <p className={styles.description}>{description}</p>
    </div>

    {children}
  </section>
);

