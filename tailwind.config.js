// module exports
module.exports = {
  content: [
    './templates/**/*.{twig,html}',
    './src/css/components/**/*.css',
  ],
  safelist: [
    'prose-white', 'opacity-0'
  ],
  theme: {
    // Extend the default Tailwind config here
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.black'),
            fontSize: '16px',
            lineHeight: theme('lineHeight.relaxed'),
            fontWeight: theme('fontWeight.normal'),
            strong: {
              // color: theme('colors.black'),
              color: 'inherit',
              fontWeight: theme('fontWeight.extrabold'),
            },
            'a': {
              color: theme('colors.primary'),
              textDecoration: 'none'
            },
            'h2, h3, h4, h5, h6': {
              fontFamily: `${theme('fontFamily.sans')}`,
              fontWeight: theme('fontWeight.extrabold'),
              color: theme('colors.black'),
              lineHeight: theme('lineHeight.tight'),
            },
            'h2': {
              marginTop: '0',
              marginBottom: '1.5rem',
              fontSize: '32px',
            },
            'h3' : {
              marginTop: '2rem',
              marginBottom: '1rem',
              fontSize: '24px',
            },
            'h4': {
              marginTop: '2rem',
              marginBottom: '1rem',
              fontSize: '20px',
            },
            'p': {
              marginTop: '0px',
              marginBottom: '1rem',
            },
            'ul.checkmarks': {
              listStyle: 'none',
              '>': {
                li: {
                  marginTop: '0',
                  marginBottom: '0.625em',
                  textAlign: 'left',
                  position: 'relative',

                  '&::before': {
                    position: 'absolute',
                    content: '""',
                    width: '13px',
                    height: '10px',
                    backgroundColor: 'transparent',
                    borderRadius: '0',
                    backgroundImage: "url('@/img/icons/check.svg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    top: '8px',
                    left: '-23px',
                  }
                }
              }
            },
            'ul': {
              '>': {
                li: {
                  marginTop: '0',
                  marginBottom: '0.625em',
                  textAlign: 'left',
                  '&::marker': {
                    color: 'inherit',
                  }
                }
              }
            },
            'ol': {
              '>': {
                li: {
                  marginTop: '0',
                  marginBottom: '0.625em',
                  textAlign: 'left',
                  '&::marker': {
                    color: 'inherit',
                  }
                }
              }
            },
            tbody: {
              td: {
                paddingTop: 0,
                paddingBottom: 0,
              },
              tr: {
                borderBottomWidth: '0',
                borderBottomColor: theme('colors.transparent')
              }
            }
          },
        },
        'lg': {
          css: {
            fontSize: '18px',
            lineHeight: theme('lineHeight.loose'),
            'h2': {
              marginTop: '0',
              marginBottom: '1.5rem',
              fontSize: '40px',
            },
            'h3' : {
              marginTop: '2rem',
              marginBottom: '1rem',
              fontSize: '32px',
            },
            'h4': {
              marginTop: '2rem',
              marginBottom: '1rem',
              fontSize: '24px',
            },
            'p': {
              marginTop: '0',
              marginBottom: '1.125rem',
            },
            'ul.checkmarks': {
              listStyle: 'none',
              '>': {
                li: {
                  marginTop: '0',
                  marginBottom: '0.625em',
                  position: 'relative',
                  '&::before': {
                    width: '23px',
                    height: '16px',
                    top: '10px',
                    left: '-23px',
                  },
                }
              }
            },
          },
        },
        'white': {
          css: {
            color: theme('colors.white'),
            'ul.checkmarks': {
              '>': {
                li: {
                  '&::before': {
                    backgroundImage: "url('@/img/icons/check-white.svg')",},
                }
              }
            },
          },
        },
      }),
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1025px',
        'xl': '1200px',
        '2xl': '1400px',
        '3xl': '1536px',
        'custom-portrait': {'raw': '(orientation: portrait) and (max-width: 767px)'}
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '11xl': '112rem',
        '12xl': '120rem',
        '13xl': '128rem',
        '14xl': '136rem',
        '14.5xl': '68rem',
      },
      lineHeight: {
        'tight': '1.2',
        'relaxed': '1.6',
      },
    },
    // Replace the default Tailwind config here
    fontSize: {
      'xs': ['.75rem', '1rem'], // 12px
      'sm': ['.8rem', '1.25rem'], // 13px
      'tiny': ['.875rem', '1.25rem'], // 14px
      'base': ['1rem', '1.5rem'], // 16px
      'lg': ['1.125rem', '1.75rem'], // 18px
      'xl': ['1.3125rem', '1.75rem'], // 21px
      '2xl': ['1.5rem', '2rem'], // 24px
      '2.5xl': ['1.625rem', '2rem'], // 26px
      '3xl': ['1.75rem', '2rem'], // 28px
      '4xl': ['2rem', '2.25rem'], // 32px
      '4.5xl': ['2.25rem', '2.5rem'], // 36px
      '5xl': ['2.5rem', '3rem'], // 40px
      '6xl': ['3rem', '3.25rem'], // 48px
      '7xl': ['4rem', '4.5rem'], // 72px
      '8xl': ['5rem', '5.5rem'], // 80px
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      primary: {
        DEFAULT: '#E35E64',
      },
      secondary: {
        DEFAULT: '#000',
      },
    },
  },
  corePlugins: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
