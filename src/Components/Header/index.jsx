import { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { RiMenu4Fill, RiCloseLine } from 'react-icons/ri'

import {
  Container,
  Button,
  Form,
  TxtDk,
  TxtMob,
  Links,
  Nav,
  Search,
  Input,
  Back
} from './styles'

function Header() {
  const [menu, setMenu] = useState({
    display: 'none'
  })
  const [search, setSearch] = useState({
    display: 'none'
  })
  const [nav, setNav] = useState({
    display: 'flex'
  })
  const [state, setState] = useState(false)
  const [stateNav, setStateNav] = useState(false)
  const [find, setfind] = useState('')

  const showMenu = () => {
    if (state === false) {
      setMenu({
        display: 'flex'
      })
      setState(true)
    } else {
      setMenu({
        display: 'none'
      })
      setState(false)
    }
  }
  const showInput = () => {
    if (stateNav === false) {
      setSearch({
        display: 'flex'
      })
      setNav({
        display: 'none'
      })
      setStateNav(true)
    } else {
      setSearch({
        display: 'none'
      })
      setNav({
        display: 'flex'
      })
      setStateNav(false)
    }
  }

  const handleSelectChangeAmount = (event) => {
    setfind(event.target.value)
  }

  return (
    <Nav>
      <Container>
        <a href='/'>
          <TxtDk>StreamJuice</TxtDk>
          <TxtMob>StreamJuice</TxtMob>
        </a>
        <Button onClick={showMenu}>
          <RiMenu4Fill />
        </Button>
      </Container>
      <Back />
      <Links style={menu}>
        <div style={nav}>
          <a href='/#/movies'>Movies</a>-<a href='/#/tv'>TV</a>-
          <a href='/#/trending'>Trending</a>
        </div>
        <Form action={`/#/search/${find}`} style={search}>
          <Input
            placeholder='Search a movie or TV show'
            onChange={handleSelectChangeAmount}
          />
        </Form>
        <Search onClick={showInput} style={nav}>
          <GoSearch />
        </Search>
        <Search onClick={showInput} style={search}>
          <RiCloseLine />
        </Search>
      </Links>
    </Nav>
  )
}

export default Header
