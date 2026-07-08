/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Helvetica Neue — licence groupe perpétuelle, police installée sur le parc
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        // Rythme de rayons inspiré d'OUDS (defaut/small/medium)
        DEFAULT: '0.5rem',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
      },
      colors: {
        // Palette calée sur le vrai orange de marque Orange (#FF7900) — accent principal,
        // utilisé avec parcimonie (CTA, valeurs clés, état actif), pas en fond de bloc.
        orange: {
          50: '#FFF4E8',
          100: '#FFE4C2',
          200: '#FFCB85',
          300: '#FFB04D',
          400: '#FF9526',
          500: '#FF7900',
          600: '#E86A00',
          700: '#C25800',
          800: '#9C4700',
          900: '#7A3800',
        },
        'orange-ob': '#FF7900',
        // Graphite : neutre secondaire (remplace le bleu générique pour tout ce qui n'est
        // pas l'accent OB — en-têtes, textes forts, cellules "CSP moins cher")
        graphite: {
          50: '#F7F8F9',
          100: '#EDEEF1',
          200: '#DBDDE2',
          300: '#B9BCC4',
          400: '#8B8F99',
          500: '#63676F',
          600: '#484C54',
          700: '#33363C',
          800: '#212328',
          900: '#121316',
        },
        // Succès / économie OB — vert malachite, aligné sur la sémantique OUDS
        malachite: {
          50: '#EAF8EF',
          100: '#CDEFDA',
          200: '#9FDFB9',
          300: '#66CA92',
          400: '#33B36F',
          500: '#159654',
          600: '#0F7A44',
          700: '#0D6238',
        },
      }
    }
  },
  plugins: []
}
