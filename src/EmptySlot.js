import { useEffect } from 'react'
import molehill from './molehill.png'

function EmptySlot(props) {

    useEffect(() => {
        let seconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, seconds)

        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '30vw' }}
                src={molehill}
                alt={'molehill'}
                onClick={props.handleCLick} />
        </div>
    )
}

export default EmptySlot