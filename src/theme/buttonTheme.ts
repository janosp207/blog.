const buttonTheme = {
  MuiButton: {
    styleOverrides: {
      root: {
        width: '8rem',
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