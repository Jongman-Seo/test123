const GlobalStyle = {
  'html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, em, img, strong, b, i, ol, ul, li, form, label, table, caption, tbody, tfoot, thead, tr, th, td, article, footer, header, nav, section': {
    margin: 0,
    padding: 0,
    border: 0,
    outline: 0,
    fontSize: '100%',
    verticalAlign: 'baseline',
    background: 'transparent',
  },
  'ul, li': {
    listStyle: 'none',
  },
  a: {
    margin: 0,
    padding: 0,
    fontSize: '100%',
    verticalAlign: 'baseline',
    background: 'transparent',
    color: 'inherit',
    textDecoration: 'inherit',
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  'input, select': {
    verticalAlign: 'middle',
  },
  button: {
    border: 'none',
    background: 'none',
    padding: 0,
    font: 'inherit',
    textAlign: 'left',
    cursor: 'pointer',
    '&:focus': {
      outline: 'inherit',
    },
  },
  /* common */
  body: {
    background: '#fff',
    fontFamily: '"Noto Sans KR", sans-serif',
  },
  '.trans': {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    transition: '1s',
    '&.enter': {
      zIndex: 10,
      opacity: 0,
      transitionTimingFunction: 'ease-out',
      '&.active, &.done': {
        opacity: 1,
      },
    },
    '&.exit': {
      zIndex: 9,
      transition: '.3s',
      transitionTimingFunction: 'ease-in',
      '&.active, &.done': {
        opacity: 0,
      },
    },
    '&.done': {
      position: 'unset',
      transform: 'none !important',
    },
  },
  /* icon */
  // '@font-face': {
  //   fontFamily: 'icomoon',
  //   src:
  //     'url("http://static.dable.io/widget-demo/fonts/icomoon.eot"), url("http://static.dable.io/widget-demo/fonts/icomoon.eot#iefix") format("embedded-opentype"), url("http://static.dable.io/widget-demo/fonts/icomoon.ttf") format("truetype"), url("http://static.dable.io/widget-demo/fonts/icomoon.woff") format("woff"), url("http://static.dable.io/widget-demo/fonts/icomoon.svg#icomoon") format("svg")',
  //   fontWeight: 'normal',
  //   fontStyle: 'normal',
  //   fontDisplay: 'block',
  // },
  // '.icon:before': {
  //   display: 'inline-block',
  //   content: '""',
  //   verticalAlign: 'middle',
  //   margin: '0 16px 0 20px',
  //   fontFamily: 'icomoon !important',
  //   fontSize: '20px',
  //   color: '#0071ce',
  //   lineHeight: 1,
  //   WebkitFontSmoothing: 'antialiased',
  //   MozOsxFontSmoothing: 'grayscale',
  // },
  '.mixed:before': {
    content: '"\\e900"',
  },
  '.cardNews:before': {
    content: '"\\e901"',
  },
  '.text:before': {
    content: '"\\e902"',
  },
  '.horizontal:before': {
    content: '"\\e903"',
  },
  '.grid:before': {
    content: '"\\e904"',
  },
  '.adOnly:before': {
    content: '"\\e905"',
  },
  '.cross:before': {
    content: '"\\e906"',
  },
  '.list:before': {
    content: '"\\e907"',
  },
  '.magazine:before': {
    content: '"\\e908"',
  },
  '.vertical:before': {
    content: '"\\e909"',
  },
  '.secret:before': {
    content: '"\\e90a"',
  },
};

export { GlobalStyle as default };
