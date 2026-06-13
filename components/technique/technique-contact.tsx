import { profile } from '@/content/profile';
import { ArrowUpRightIcon } from './icons';
import styles from './technique.module.css';
import ct from './contact.module.css';

export function TechniqueContact() {
  const { socials } = profile;
  const links = [
    {
      label: 'Email',
      handle: profile.email,
      href: `mailto:${profile.email}`,
      cta: 'envoyer un message',
      external: false,
    },
    {
      label: 'LinkedIn',
      handle: socials.linkedin.handle,
      href: socials.linkedin.url,
      cta: 'profil pro',
      external: true,
    },
    {
      label: 'GitHub',
      handle: socials.github.handle,
      href: socials.github.url,
      cta: 'code & skills',
      external: true,
    },
  ];

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <span className={styles.sectionTag}>06 · Contact</span>
        <h2 className={styles.sectionTitle}>On en parle ?</h2>
        <p className={styles.sectionLede}>
          Disponible pour des missions fullstack — particulièrement les contextes où l'AI tooling
          peut faire la différence.
        </p>
        <div className={ct.contactLinks}>
          {links.map((link) => (
            <a
              key={link.label}
              className={ct.contactLink}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className={ct.contactLabel}>{link.label}</span>
              <span className={ct.contactHandle}>{link.handle}</span>
              <span className={`${ct.contactArrow} ${styles.mono}`}>
                {link.cta} <ArrowUpRightIcon className={styles.icon} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
