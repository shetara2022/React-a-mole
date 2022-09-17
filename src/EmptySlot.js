import { useEffect } from 'react'
import { molehill } from './molehill.png'

function EmptySlot(props) {

    let randSeconds = Math.ceil(Math.random() * 5000)
    let timer = setTimeout(() => {
        props.setDisplayMole(true)
    }, randSeconds)

    return () => clearTimeout(timer)
}