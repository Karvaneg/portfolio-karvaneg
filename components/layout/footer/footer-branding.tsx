import { footerData } from '@/app/lib/data/footer';
import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';

export function FooterBranding() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={cn('text-center md:text-left')}>
      {/* Nom + titre */}
      <div className={cn('text-sm', dsTokens.color.textSecondary)}>
        {currentYear} — {footerData.name} · {footerData.title}
      </div>

      {/* Techline */}
      <div className={cn('text-xs mt-1', dsTokens.color.textSecondary)}>{footerData.techline}</div>

      {/* BrandName + explication */}
      <div className={cn('text-xs mt-1', dsTokens.color.textSecondary)}>
        <p className={cn('font-bold')}>{footerData.brandName}</p>
        <div
          id="karvaneg"
          tabIndex={-1}
          className={cn(
            'outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm scroll-mt-24 mt-1',
          )}
        >
          {footerData.explainBrandName.map((item, index) => (
            <p key={index}>{item.line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
