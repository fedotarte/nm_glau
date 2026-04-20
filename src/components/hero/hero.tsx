import { ReactNode } from "react";
import styles from "./hero.module.css";

interface HeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  children?: ReactNode;
  subLink?: string;
  subtitle?: string;
}

export const Hero = ({
  title,
  subtitle,
  description,
  children,
  subLink,
}: HeroProps) => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        {title}
        <br />
        {subtitle}
      </h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.subLinkGap}>
        <p className={styles.subLink}>{subLink}</p>
      </div>
    </div>

    {children}
  </section>
);
