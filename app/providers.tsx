/**
 * Provider de thème (next-themes). Rendu côté serveur : un composant client qui
 * reçoit `children` laisse ces enfants être SSR/SSG. (Ne PAS charger en
 * `ssr: false`, ce qui rendrait tout le site client-only — cf. objectif Lighthouse.)
 */
export { ThemeProviderClient as ThemeProvider } from './theme-provider';
