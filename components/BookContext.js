import React  from 'react'
export default BookContext = React.createContext({
    id: '1',
    title: 'Tarzan of the Apes',
    author: 'Edgar Rice Burroughs ',
    progress: 'none',
    img: require('../assets/images/tarzan.jpg')
  })