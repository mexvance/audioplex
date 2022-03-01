import React  from 'react'
export default BookContext = React.createContext({
  book: {
    id: '-1',
    title: 'Unknown',
    author: 'Unknown',
    progress: 'Unknown',
    img: 'Unknown'
  },
  setBook: ()=>{}
  })