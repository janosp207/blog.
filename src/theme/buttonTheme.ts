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
    },
  },
}

export default buttonTheme;