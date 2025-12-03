import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Disable unused core plugins for smaller CSS
  corePlugins: {
    // Disable features we're not using
    container: false,
    aspectRatio: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    backgroundBlendMode: false,
    mixBlendMode: false,
    grayscale: false,
    hueRotate: false,
    invert: false,
    saturate: false,
    sepia: false,
    brightness: false,
    contrast: false,
    dropShadow: false,
    blur: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
  // Optimize for production
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
