const IntroStyle = {
  background: '#f8f8f8',
  minHeight: '100vh',
  '.logo_top': {
    textAlign: 'center',
    padding: '40px 0',
    img: {
      display: 'inline-block',
      width: '100px',
    },
  },
  '.content': {
    background: '#fff',
    padding: '140px 0',
    '.cont_wrapper': {
      display: 'flex',
      justifyContent: 'center',
      a: {
        margin: '0 75px',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: 1.45,
        color: '#61bfff',
      },
      img: {
        display: 'block',
        width: '370px',
        marginBottom: '8px',
      },
    },
  },
};

export { IntroStyle as default };
