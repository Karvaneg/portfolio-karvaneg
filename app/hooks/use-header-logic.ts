import { useActiveSection, useMenuState, useScrollToSection } from './use-navigation';

export function useHeaderLogic() {
  const activeSection = useActiveSection();
  const { isOpen, toggleMenu, closeMenu } = useMenuState();
  const scrollToSection = useScrollToSection();

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    closeMenu();
  };

  return {
    activeSection,
    isOpen,
    toggleMenu,
    handleMenuClick,
    scrollToSection,
  };
}
