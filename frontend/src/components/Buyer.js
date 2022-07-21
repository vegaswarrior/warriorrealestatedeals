import React from 'react'
import { Container, Button } from 'react-bootstrap'

const Buyer = () => {
  return (
    <Container fluid className='buyuer_container'>
       <h1 className='text-center'>Looking for your next great <br /> Investment Opportunity ?</h1>
       <p className='text-center'>Then you're in the right spot, below we have just a handful of our latest deals...</p>
       <Button>Click Me</Button>
    </Container>
  )
}

export default Buyer