import Mole from './mole'
import { useEffect, useState } from 'react'

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)


    //     useEffect(() => {

    //    })


    return (
        <div>
            <h2> Mole Container </h2>
            <Mole />
        </div>
    )
}

export default MoleContainer