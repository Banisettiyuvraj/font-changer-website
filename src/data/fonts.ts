import { Font, FontPair } from '../types/font';

export const FONTS: Font[] = [
  // Sans-serif fonts
  {
    name: 'Inter',
    family: 'Inter',
    category: 'sans-serif',
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    styles: ['normal', 'italic'],
    popularity: 95,
    description: 'A typeface carefully crafted & designed for computer screens.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Roboto',
    family: 'Roboto',
    category: 'sans-serif',
    weights: [100, 300, 400, 500, 700, 900],
    styles: ['normal', 'italic'],
    popularity: 98,
    description: 'Google\'s signature family of fonts, the default font on Android.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Open Sans',
    family: 'Open Sans',
    category: 'sans-serif',
    weights: [300, 400, 500, 600, 700, 800],
    styles: ['normal', 'italic'],
    popularity: 97,
    description: 'Humanist sans serif typeface designed by Steve Matteson.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Lato',
    family: 'Lato',
    category: 'sans-serif',
    weights: [100, 300, 400, 700, 900],
    styles: ['normal', 'italic'],
    popularity: 94,
    description: 'A humanist sans serif font family designed by Łukasz Dziedzic.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Montserrat',
    family: 'Montserrat',
    category: 'sans-serif',
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    styles: ['normal', 'italic'],
    popularity: 96,
    description: 'Inspired by the old posters and signs in Montserrat neighborhood.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Source Sans Pro',
    family: 'Source Sans Pro',
    category: 'sans-serif',
    weights: [200, 300, 400, 600, 700, 900],
    styles: ['normal', 'italic'],
    popularity: 92,
    description: 'Adobe\'s first open source typeface family.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Poppins',
    family: 'Poppins',
    category: 'sans-serif',
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    styles: ['normal', 'italic'],
    popularity: 93,
    description: 'Geometric sans serif typeface with rounded edges.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Nunito',
    family: 'Nunito',
    category: 'sans-serif',
    weights: [200, 300, 400, 500, 600, 700, 800, 900, 1000],
    styles: ['normal', 'italic'],
    popularity: 89,
    description: 'A well balanced sans serif typeface superfamily.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Work Sans',
    family: 'Work Sans',
    category: 'sans-serif',
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    styles: ['normal', 'italic'],
    popularity: 88,
    description: 'A typeface based loosely on early Grotesques.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Ubuntu',
    family: 'Ubuntu',
    category: 'sans-serif',
    weights: [300, 400, 500, 700],
    styles: ['normal', 'italic'],
    popularity: 87,
    description: 'The Ubuntu Font Family are libre fonts funded by Canonical.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'PT Sans',
    family: 'PT Sans',
    category: 'sans-serif',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    popularity: 85,
    description: 'Based on Russian sans serif types of the second part of the 20th century.',
    googleFont: true,
    websafe: false
  },

  // Serif fonts
  {
    name: 'Merriweather',
    family: 'Merriweather',
    category: 'serif',
    weights: [300, 400, 700, 900],
    styles: ['normal', 'italic'],
    popularity: 91,
    description: 'Designed for optimal readability on screens.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Playfair Display',
    family: 'Playfair Display',
    category: 'display',
    weights: [400, 500, 600, 700, 800, 900],
    styles: ['normal', 'italic'],
    popularity: 90,
    description: 'Transitional design for large size display usage.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Libre Baskerville',
    family: 'Libre Baskerville',
    category: 'serif',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    popularity: 84,
    description: 'Web font optimized for body text.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'PT Serif',
    family: 'PT Serif',
    category: 'serif',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    popularity: 83,
    description: 'Designed for use together with PT Sans.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Crimson Text',
    family: 'Crimson Text',
    category: 'serif',
    weights: [400, 600, 700],
    styles: ['normal', 'italic'],
    popularity: 81,
    description: 'Inspired by the beautiful oldstyle typefaces.',
    googleFont: true,
    websafe: false
  },

  // Monospace fonts
  {
    name: 'Fira Code',
    family: 'Fira Code',
    category: 'monospace',
    weights: [300, 400, 500, 600, 700],
    styles: ['normal'],
    popularity: 86,
    description: 'Monospaced font with programming ligatures.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Source Code Pro',
    family: 'Source Code Pro',
    category: 'monospace',
    weights: [200, 300, 400, 500, 600, 700, 800, 900],
    styles: ['normal', 'italic'],
    popularity: 85,
    description: 'Adobe\'s monospaced font family for coding.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'JetBrains Mono',
    family: 'JetBrains Mono',
    category: 'monospace',
    weights: [100, 200, 300, 400, 500, 600, 700, 800],
    styles: ['normal', 'italic'],
    popularity: 82,
    description: 'Typeface for developers, by JetBrains.',
    googleFont: true,
    websafe: false
  },

  // Display fonts
  {
    name: 'Bebas Neue',
    family: 'Bebas Neue',
    category: 'display',
    weights: [400],
    styles: ['normal'],
    popularity: 89,
    description: 'All caps display typeface.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Oswald',
    family: 'Oswald',
    category: 'display',
    weights: [200, 300, 400, 500, 600, 700],
    styles: ['normal'],
    popularity: 88,
    description: 'Reworking of the classic Gothic typeface style.',
    googleFont: true,
    websafe: false
  },

  // Handwriting fonts
  {
    name: 'Dancing Script',
    family: 'Dancing Script',
    category: 'handwriting',
    weights: [400, 500, 600, 700],
    styles: ['normal'],
    popularity: 87,
    description: 'Lively casual script where the letters bounce and change size.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Great Vibes',
    family: 'Great Vibes',
    category: 'handwriting',
    weights: [400],
    styles: ['normal'],
    popularity: 78,
    description: 'Connecting script in the style of 20th century American advertising.',
    googleFont: true,
    websafe: false
  },
  {
    name: 'Pacifico',
    family: 'Pacifico',
    category: 'handwriting',
    weights: [400],
    styles: ['normal'],
    popularity: 84,
    description: 'Original and fun brush script handwriting font.',
    googleFont: true,
    websafe: false
  },

  // Web-safe fonts
  {
    name: 'Arial',
    family: 'Arial',
    category: 'sans-serif',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    popularity: 99,
    description: 'One of the most widely used sans-serif typefaces.',
    googleFont: false,
    websafe: true
  },
  {
    name: 'Helvetica',
    family: 'Helvetica',
    category: 'sans-serif',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    popularity: 98,
    description: 'Neo-grotesque design, widely used in signage.',
    googleFont: false,
    websafe: true
  },
  {
    name: 'Times New Roman',
    family: 'Times New Roman',
    category: 'serif',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    popularity: 97,
    description: 'Commissioned by The Times newspaper in 1931.',
    googleFont: false,
    websafe: true
  },
  {
    name: 'Georgia',
    family: 'Georgia',
    category: 'serif',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    popularity: 92,
    description: 'Designed for clarity on computer monitors.',
    googleFont: false,
    websafe: true
  },
  {
    name: 'Verdana',
    family: 'Verdana',
    category: 'sans-serif',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    popularity: 91,
    description: 'Designed for use as a system font on Windows.',
    googleFont: false,
    websafe: true
  },
  {
    name: 'Courier New',
    family: 'Courier New',
    category: 'monospace',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    popularity: 85,
    description: 'Monospaced slab serif typeface.',
    googleFont: false,
    websafe: true
  },
  {
    name: 'Trebuchet MS',
    family: 'Trebuchet MS',
    category: 'sans-serif',
    weights: [400, 700],
    styles: ['normal', 'italic'],
    popularity: 80,
    description: 'Humanist sans-serif designed by Vincent Connare.',
    googleFont: false,
    websafe: true
  },
  {
    name: 'Impact',
    family: 'Impact',
    category: 'display',
    weights: [400],
    styles: ['normal'],
    popularity: 75,
    description: 'Condensed sans-serif typeface designed for headlines.',
    googleFont: false,
    websafe: true
  }
];

export const FONT_PAIRS: FontPair[] = [
  {
    primary: FONTS.find(f => f.name === 'Playfair Display')!,
    secondary: FONTS.find(f => f.name === 'Source Sans Pro')!,
    description: 'Elegant serif heading with clean sans-serif body',
    useCase: 'Editorial, blogs, luxury brands'
  },
  {
    primary: FONTS.find(f => f.name === 'Montserrat')!,
    secondary: FONTS.find(f => f.name === 'Merriweather')!,
    description: 'Modern sans-serif with readable serif',
    useCase: 'Corporate websites, magazines'
  },
  {
    primary: FONTS.find(f => f.name === 'Oswald')!,
    secondary: FONTS.find(f => f.name === 'Open Sans')!,
    description: 'Bold display font with versatile sans-serif',
    useCase: 'Sports, fitness, bold branding'
  },
  {
    primary: FONTS.find(f => f.name === 'Bebas Neue')!,
    secondary: FONTS.find(f => f.name === 'Lato')!,
    description: 'Strong display heading with humanist body',
    useCase: 'Posters, advertising, modern design'
  },
  {
    primary: FONTS.find(f => f.name === 'Poppins')!,
    secondary: FONTS.find(f => f.name === 'Nunito')!,
    description: 'Geometric sans-serif pairing with friendly feel',
    useCase: 'Startups, tech companies, apps'
  }
];

export const SAMPLE_TEXTS = [
  'The quick brown fox jumps over the lazy dog',
  'Typography is the art and technique of arranging type',
  'Good typography makes reading effortless and enjoyable',
  'Fonts have personality and can convey different moods',
  'The five boxing wizards jump quickly',
  'Pack my box with five dozen liquor jugs',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Design is not just what it looks like—design is how it works'
];
