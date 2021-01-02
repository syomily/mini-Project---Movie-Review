import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Card, CardColumns, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchResult = () => {
  const [data, setData] = useState({
    movieData: []
  })

  useEffect(() => {
    axios.post(`http://13.212.139.34:3000/home/searchBar?page=1`, { movieTitle: localStorage.getItem('searchTerm') })
      .then(
        res => {
          const result = res.data.results
          setData({result})
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
  }, [])

  const { result } = data
  console.log(result)
  

  return (
    <>
      <Container>
        <CardColumns className='my-5'>
          {
            result
              ? result.map(item => {
                const { Title, Genre, Poster } = item
                return(
                  <div key={Poster} className="kotak">
                    <Link to="/detailpage#/overview">
                      <Card bg='light' className='kotakecil'> 
                        <Card.Img width={200} height={300} variant="top" src={Poster} />
                        <Card.Body>
                          <Card.Title className='text-dark'>{Title}</Card.Title>
                          <Card.Text className='text-dark'>{Genre}</Card.Text>
                        </Card.Body>               
                      </Card>
                    </Link>
                  </div>
                )
                
              })
              : null
          }
        </CardColumns>
      </Container>
    </>
  )
}

export default SearchResult

