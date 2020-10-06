const SidebarStyle = {
  width: '270px',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: 100,
  '.logo_top': {
    textAlign: 'center',
    padding: '25px 0',
    img: {
      display: 'inline-block',
      width: '100px',
    },
  },
  '.scroll_wrapper': {
    overflowY: 'scroll',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '81px',
    bottom: 0,
    transition: 'all 2s ease-out',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#fff',
    },
    '&:hover': {
      msOverflowStyle: 'inherit',
      '::-webkit-scrollbar-thumb': {
        background: '#ccc',
      },
      '&~.icon_arrow': {
        opacity: 1,
      },
    },
  },
  '.menu': {
    maxHeight: '73px',
    transition: 'all .4s ease-out',
    overflow: 'hidden',
    background: '#fdfdfd',
    '&.show': {
      maxHeight: '900px',
      '.menu_title:after': {
        transform: 'rotate(-45deg)',
      },
    },
    'a, button': {
      display: 'block',
      width: '100%',
      padding: '25px 0',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.43,
      color: '#444',
    },
  },
  '.menu_title': {
    background: '#f4f4f4',
    position: 'relative',
    '&:before': {
      display: 'inline-block',
      content: '""',
      verticalAlign: 'middle',
      width: '19px',
      height: '22px',
      background:
        'url(http://static.dable.io/widget-demo/img/logo_side.png) 0 0 no-repeat',
      backgroundSize: '100%',
      margin: '0 16px 0 20px',
    },
    '&:after': {
      display: 'inline-block',
      content: '""',
      width: '6px',
      height: '6px',
      borderRight: '2px solid #b0b9c1',
      borderTop: '2px solid #b0b9c1',
      transform: 'rotate(135deg)',
      position: 'absolute',
      right: '20px',
      top: '50%',
      marginTop: '-7px',
      transition: 'all .2s ease-out',
      transitionDelay: '.1s',
    },
  },
  '.menu_item a': {
    '&:hover': {
      background: '#e9f7ff',
    },
    '&.active': {
      color: '#fff',
      background: '#0071ce',
      'span:before': {
        color: '#fff',
      },
    },
  },
  '.default:before, .best:before': {
    display: 'inline-block',
  },
  '.default:before': {
    width: '8px',
    height: '8px',
    content: '"+"',
    color: '#0071ce',
    margin: '0 22px 0 25px',
  },
  '.best:before': {
    width: '25px',
    height: '13px',
    content: '""',
    background:
      'url(http://static.dable.io/widget-demo/img/icon_best.png) 0 0 no-repeat',
    backgroundSize: 'auto 100%',
    margin: '0 13px 0 17px',
    verticalAlign: 'middle',
  },
  '.icon_arrow': {
    opacity: 0,
    transition: 'all .3s ease-out',
    color: '#fff',
    background: 'rgba(0,0,0,.4)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    position: 'fixed',
    left: '200px',
    bottom: '20px',
    zIndex: 101,
    '&:before': {
      display: 'block',
      content: '""',
      width: '2px',
      height: '12px',
      background: '#fff',
      margin: '12px auto 0',
    },
    '&:after': {
      display: 'block',
      content: '""',
      width: '6px',
      height: '6px',
      borderRight: '2px solid #fff',
      borderTop: '2px solid #fff',
      transform: 'rotate(135deg)',
      margin: '-6px auto 0',
    },
  },
};

export { SidebarStyle as default };
