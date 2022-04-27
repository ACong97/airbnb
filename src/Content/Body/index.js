import Experience from './experiencesBody'
import Place from './placeBody'
import { useEffect, useState } from 'react';


function BodyContent() {

    const api = 'https://airbnb-clone-sever.herokuapp.com/api/locations'
    const [dataLocation, setDataLocation] = useState([])

    useEffect(() => {
        fetch(api)
            .then(function (responsive) {
                return responsive.json()
            })
            .then(data => {
                setDataLocation(data)
            })
            .catch(err => (console.error(err)))
    }, [])


    return (
        <div>
            <Place data={dataLocation} />
            <Experience />
        </div>
    )
}


export default BodyContent;