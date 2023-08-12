const buttonTheme = {
  MuiButton: {
    styleOverrides: {
      root: {
        width: 'contain',
        padding: '0.5rem 1rem',
        borderRadius: '5rem',
        backgroundColor: '#fff',
        color: '#000',
        border: '1px solid black',
        '&:hover': {
          backgroundColor: '#000',
          color: '#fff',
        },
        fontWeight: 'bold',
      },
      contained: {
        backgroundColor: '#0D0D0D',
        color: 'white',
        '&:hover': {
          backgroundColor: '#2D2D2D',
        },
      },
    },
  },
}

export default buttonTheme;