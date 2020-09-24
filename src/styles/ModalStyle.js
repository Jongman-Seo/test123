const ModalStyle = {
  transition: 'all .3s ease-out',
  opacity: 1,
  visibility: 'visible',
  position: 'absolute',
  left: '50%',
  top: '50%',
  zIndex: 100,
  width: '600px',
  height: '400px',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  letterSpacing: '-.035em',
  background: 'rgba(0,0,0,.8)',
  padding: '35px 40px',
  '&.hidden': {
    opacity: 0,
    visibility: 'hidden',
  },
  h3: {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: 1.5,
    marginBottom: '28px',
    '& .icon:before': {
      color: '#fff',
      marginLeft: 0,
      verticalAlign: 'inherit',
    },
  },
  p: {
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: 1.75,
    whiteSpace: 'pre-wrap',
  },
  '.btn_modal': {
    display: 'inline-block',
    '&.close': {
      width: '24px',
      height: '24px',
      position: 'absolute',
      right: '24px',
      top: '24px',
      '&:before, &:after': {
        display: 'block',
        content: '""',
        width: '2px',
        height: '33px',
        backgroundColor: '#fff',
        position: 'absolute',
        right: '10px',
        top: '-4px',
      },
      '&:before': {
        transform: 'rotate(45deg)',
      },
      '&:after': {
        transform: 'rotate(-45deg)',
      },
    },
  },
};

export { ModalStyle as default };
