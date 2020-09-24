const ViewStyle = {
  '.content': {
    width: '100%',
    boxSizing: 'border-box',
    paddingLeft: '270px',
  },
  '.cont_wrapper': {
    position: 'relative',
  },
  '.cont_text': {
    color: '#334851',
  },
  h2: {
    fontSize: '36px',
    fontWeight: 'bold',
    lineHeight: 1.25,
    letterSpacing: '-.04em',
  },
  p: {
    fontSize: '14px',
    lineHeight: 1.85,
    letterSpacing: '-.045em',
  },
  '.cont_img': {
    img: {
      display: 'block',
      width: '100%',
    },
  },
  '.btn_link': {
    fontSize: '12px',
    fontWeight: 500,
    color: '#61bfff',
    lineHeight: 1.5,
    letterSpacing: '-.3px',
    position: 'absolute',
    right: '32px',
    top: '32px',
    zIndex: 99,
    img: {
      display: 'block',
      margin: '0 auto 6px',
      width: '68.6px',
      height: '68.6px',
    },
  },
  // AlgorithmView
  '& .algorithm_view': {
    '.cont_wrapper': {
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center',
    },
    '.cont_text': {
      alignSelf: 'center',
      whiteSpace: 'pre-wrap',
    },
    h2: {
      marginBottom: '34px',
    },
    '.cont_img': {
      width: '785px',
      height: '785px',
    },
  },
  // DesignView
  '& .design_view': {
    '.cont_text': {
      padding: '84px 0 0 60px',
      position: 'absolute',
      zIndex: 10,
    },
    h2: {
      display: 'inline-block',
      marginRight: '12px',
    },
    '.btn_modal': {
      display: 'inline-block',
      '&.show': {
        width: '46px',
        height: '46px',
        background:
          'url("http://static.dable.io/widget-demo/img/view/icon_bookmark.svg")',
        transition: 'all .2s ease-out',
        verticalAlign: 'bottom',
        '&:hover, &.active': {
          background:
            'url("http://static.dable.io/widget-demo/img/view/icon_bookmark_hover.svg")',
        },
      },
    },
    '.tab_list': {
      marginTop: '84px',
      '& li': {
        padding: '12px 0',
        '& a': {
          display: 'inline-block',
          minWidth: '84px',
          background: '#fff',
          padding: '14px 20px',
          boxSizing: 'border-box',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#b0b9c1',
          letterSpacing: '-.03em',
          lineHeight: '1.375em',
          textAlign: 'center',
          border: '1px solid #b0b9c1',
          '&:hover, &.active, &.default_active': {
            color: '#334851',
            borderColor: '#334851',
          },
        },
      },
    },
  },
};

export { ViewStyle as default };
