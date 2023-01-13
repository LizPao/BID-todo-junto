import { Component } from 'react'
import { Helmet } from 'react-helmet';


class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            count: parseInt(this.props.age)
        };
    }
    render() { 
        const { firstName, lastName, hairColor } = this.props;
        return (
            <>
                <Helmet>
                    <title>Page 1</title>
                </Helmet>
                <div>
                    <h1> { lastName }, { firstName }</h1>
                    <p >Age: {this.state.count}</p>
                    <p>Hair Color: { hairColor }</p>
                    <button onClick={()=> this.setState({count: this.state.count+1})}>Birthday Button for { firstName } { lastName }</button>
                </div>   
            </>
        );
    }
}

export default PersonCard;