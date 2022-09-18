import mole from './mole.png'
import { useEffect } from 'react'


const Mole = (props) => {
    useEffect(() => {

        let seconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, seconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '30vw' }}
                src={mole}
                alt={'mole'}
                onClick={props.handleClick} />
        </div>
    )
}
export default Mole