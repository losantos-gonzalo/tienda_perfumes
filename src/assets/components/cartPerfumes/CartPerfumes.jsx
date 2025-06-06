import React from 'react'
import perfumes from '../../data/perfumes'
import { Box } from '@chakra-ui/react'

const CartPerfumes = () => {
    return (

        <Box className='cart'>
            {perfumes.map((perfumes) => (
                <Box key={perfumes.id}>
                    <img src={perfumes.img} alt='' className='cartImg' />
                    {perfumes.nombre}
                </Box>
            ))}
        </Box>
    )
}

export default CartPerfumes


