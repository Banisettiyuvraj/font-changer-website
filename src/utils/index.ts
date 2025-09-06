import { Font, FontFilter } from '../types/font';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterFonts(fonts: Font[], filter: FontFilter): Font[] {
  return fonts.filter(font => {
    if (filter.category && font.category !== filter.category) return false;
    if (filter.websafeOnly && !font.websafe) return false;
    if (filter.googleFontsOnly && !font.googleFont) return false;
    if (filter.search) {
      const searchLower = filter.search.toLowerCase();
      return (
        font.name.toLowerCase().includes(searchLower) ||
        font.description.toLowerCase().includes(searchLower) ||
        font.category.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });
}

export function sortFontsByPopularity(fonts: Font[]): Font[] {
  return [...fonts].sort((a, b) => b.popularity - a.popularity);
}

export function getFontCSSValue(font: Font): string {
  if (font.websafe) {
    return font.family;
  }
  return `"${font.family}", ${getCategoryFallback(font.category)}`;
}

function getCategoryFallback(category: string): string {
  switch (category) {
    case 'serif':
      return 'Georgia, serif';
    case 'sans-serif':
      return 'Arial, sans-serif';
    case 'monospace':
      return '"Courier New", monospace';
    case 'display':
      return 'Arial Black, sans-serif';
    case 'handwriting':
      return 'cursive';
    default:
      return 'sans-serif';
  }
}

export function generateFontStyles(
  font: Font,
  size: number = 16,
  weight: number = 400,
  style: 'normal' | 'italic' = 'normal',
  lineHeight: number = 1.5,
  letterSpacing: number = 0,
  color: string = '#000000'
): React.CSSProperties {
  return {
    fontFamily: getFontCSSValue(font),
    fontSize: `${size}px`,
    fontWeight: weight,
    fontStyle: style,
    lineHeight,
    letterSpacing: `${letterSpacing}px`,
    color,
    transition: 'all 0.3s ease',
  };
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function downloadTextFile(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function generateCSS(
  font: Font,
  size: number,
  weight: number,
  style: 'normal' | 'italic',
  lineHeight: number,
  letterSpacing: number,
  color: string,
  selector: string = '.font-preview'
): string {
  return `${selector} {
  font-family: ${getFontCSSValue(font)};
  font-size: ${size}px;
  font-weight: ${weight};
  font-style: ${style};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing}px;
  color: ${color};
}`;
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
}

export function formatFontName(name: string): string {
  return name.replace(/\+/g, ' ');
}

export function getRandomSampleText(): string {
  const texts = [
    'The quick brown fox jumps over the lazy dog',
    'Typography is the art and technique of arranging type',
    'Good typography makes reading effortless and enjoyable',
    'Fonts have personality and can convey different moods',
    'The five boxing wizards jump quickly',
    'Pack my box with five dozen liquor jugs',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Design is not just what it looks like—design is how it works'
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}
