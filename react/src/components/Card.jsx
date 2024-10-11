import Button from './Button' // import Button for use within the Card

function Card({ data }) { // define the Card component, accepting 'data' as a prop

    return ( 
        // container for the card, card-body container and button
        <div className="card" style={{'maxWidth': '800px'}}>
            <img className="card-img-top" src={data.image}
                 alt="background image overlay of random numbers" 
                 style={{'maxHeight': '40%'}}/>     
            <div className="card-body"> 
                <h5 className="card-title">{data.title}</h5> // Title of the card, sourced from 'data.title'
                <p className="card-text">{data.description}</p>   // Description of the card, sourced from 'data.description'
            </div>
            <Button buttondata={data} /> // Render the Button component, passing the entire 'data' object as props
        </div>
    )
}

export default Card // Export the Card component for use in other parts of the application