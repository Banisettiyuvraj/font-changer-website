export interface Font {
  name: string;
  family: string;
  category: FontCategory;
  weights: number[];
  styles: FontStyle[];
  popularity: number;
  description: string;
  previewText?: string;
  googleFont: boolean;
  websafe: boolean;
}

export type FontCategory = 
  | 'serif'
  | 'sans-serif'
  | 'display'
  | 'handwriting'
  | 'monospace';

export type FontStyle = 'normal' | 'italic';

export interface FontSettings {
  size: number;
  weight: number;
  style: FontStyle;
  lineHeight: number;
  letterSpacing: number;
  color: string;
}

export interface FontPair {
  primary: Font;
  secondary: Font;
  description: string;
  useCase: string;
}

export interface FontFilter {
  category?: FontCategory;
  search?: string;
  websafeOnly?: boolean;
  googleFontsOnly?: boolean;
}
