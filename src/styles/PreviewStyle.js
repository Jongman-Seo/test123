const PreviewStyle = {
  margin: '0 auto',
  textAlign: 'center',
  width: '915px',
  '.img_box': {
    display: 'block',
    width: '100%',
    position: 'relative',
    '&.desktop': {
      height: '546px',
      paddingTop: '170px',
    },
    '&.mobile': {
      width: '300px',
      height: '604px',
      paddingTop: '105px',
      margin: '0 auto',
    },
    '&:after': {
      display: 'block',
      content: '""',
      width: '100%',
      height: '4px',
      background: '#fff',
      position: 'absolute',
      left: 0,
      bottom: 0,
    },
  },
  'img, video': {
    display: 'block',
    width: '100%',
  },
  '.toggle_box': {
    display: 'inline-block',
    marginTop: '30px',
    '.toggle_item': {
      margin: '0 0 12px',
      position: 'relative',
    },
  },
  '.control': {
    position: 'absolute',
    top: '2px',
    left: '50%',
    width: '48px',
    height: '22px',
    marginLeft: '-24px',
    borderRadius: '11px',
    transition: 'background-color .15s ease-in',
    cursor: 'pointer',
    '&.device': {
      background: '#61bfff',
    },
    '&.type': {
      background: '#ff9ab4',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: '4px',
      top: '4px',
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      background: '#fff',
      transition: 'left .15s ease-in',
    },
    '&.toggled:after': {
      left: '29px',
    },
  },
  '.option': {
    display: 'inline-block',
    width: '80px',
    padding: '2px 0',
    margin: '0 35px',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '1.36',
    letterSpacing: '-.03em',
    textAlign: 'center',
    cursor: 'pointer',
    '&.device': {
      color: '#61bfff',
      '&.toggled': {
        background: '#e9f7ff',
      },
    },
    '&.type': {
      color: '#ff9ab4',
      '&.toggled': {
        background: '#fff0f4',
      },
    },
  },
};

export { PreviewStyle as default };
