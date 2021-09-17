import Board from 'Components/Board'
import { useEffect, useState } from 'react'
import api from 'Services/dataTrending'
import { Loading } from 'Styles/globalStyles'

import { Container } from './styles'

function Movies() {
  const [data, setData] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      const list = await api.getMovies()
      setData(list)
    }
    loadAll()
  }, [])
  return (
    <>
      <Container>
        {data.map((item, index) => {
          return (
            <Board
              key={index}
              title={item.title}
              items={item.items}
              type={'movie'}
            />
          )
        })}
      </Container>
      {data.length <= 0 && (
        <Loading>
          <h1>CARREGANDO</h1>
        </Loading>
      )}
    </>
  )
}

export default Movies
