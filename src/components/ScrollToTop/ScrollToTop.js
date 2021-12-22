import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
// import './ScrollToTop.css'

const ScrollToTop = () => {
const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
    const toggleVisibility = () =>
    window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
}, [])

return isVisible ? (
    <Wrapper>
        <ArrowUpwardIcon fontSize='large' />
    </Wrapper>
) : null
}

const Wrapper = styled.div`
    position: fixed;
    bottom: 2em;
    right: 4em;
    background-color: transparent;

@media (max-width: 900px) {
    display: none;
}

`;
export default ScrollToTop