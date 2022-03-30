import nen from './anhnen.webp'

function Image() {
    return <img
        src={nen}
        style={
            {
                objectPosition: 'center',
                objectFit: 'cover',
                height: '100%',
                width: '100%',
                borderRadius: '16px'
            }
        }
    ></img>
}

export default Image