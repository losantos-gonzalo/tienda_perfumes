import React from 'react'
import perfumes from '../../data/perfumes'
import { Box, Button } from '@chakra-ui/react'

const CartPerfumes = () => {
    return (

        <Box className='cart'>
            {perfumes.map((perfumes) => (
                <div key={perfumes.id}>
                    <img src={perfumes.img} alt='' className='cartImg' />
                    <Button>Ver mas!</Button>
                </div>
            ))}
        </Box>
    )
}

export default CartPerfumes


