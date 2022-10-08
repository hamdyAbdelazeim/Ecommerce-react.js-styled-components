import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'

const Container = styled.div`
  height: 60px;
  background-color: #fcf5f5;
  ${mobile({ height: '50px' })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: 'none' })}
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ marginLeft: '40px' })}
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`

const MenuItem = styled.div`
  font-size: 19px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;

  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`

const Navbar = () => {
  const toCart = useSelector((state) => state)
  console.log(toCart)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer style={{ border: 'none' }}>
            <Input placeholder='Search...' style={{ fontSize: '19px' }} />
            <Search style={{ color: 'red', fontSize: 25 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>
              Ecommerce
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link
              to='/register'
              style={{ color: 'black', textDecoration: 'none' }}
            >
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/login'
              style={{ color: 'black', textDecoration: 'none' }}
            >
              SIGN IN
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to='/cart' style={{ color: 'black', textDecoration: 'none' }}>
              <Badge badgeContent={toCart.cart.cartTotalAmoint} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
