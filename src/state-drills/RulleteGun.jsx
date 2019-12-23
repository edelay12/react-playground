import React from 'react'
import './rullete.css';

class Rullet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber : null,
            spinningTheChamber : false,
            click : null
        }
    }
  
fire = () => {
    this.setState({spinningTheChamber : true});
    console.log(this.state.chamber)
    let timeout

    timeout = setTimeout(() => {
    
       this.setState( {chamber : Math.ceil(Math.random() * this.props.bulletInChamber)});
       if (this.props.bulletInChamber === this.state.chamber) {
        console.log(this.state.chamber)
         this.setState({click :'BANG!!!!'});
         clearTimeout(timeout);
       } else {
        console.log(this.state.chamber)
        this.setState({click :"you're safe!!"});
        clearTimeout(timeout);
       }
       
    }, 2000)



}
render() {
return (
    <div>
<p>{this.state.click}</p>
<button className='triggerButton' onClick={this.fire}>Pull the trigger!</button>

    </div>
)

}
}

export default Rullet;