import React from 'react';

class Hello extends React.Component{

    constructor(props) {
        super(props)
        this.state = { who : 'Initial State'}
    }

    handleButtonClick = (e) => {
        console.log(e.target.value)
        this.setState( { who : e.target.value })
    }
render (){
return (
<div>
    <p>Hello, {this.state.who}</p>

    <button value='World' onClick={this.handleButtonClick}>World</button>
    <button value='Friend' onClick={this.handleButtonClick}>Friend</button>
    <button value='React' onClick={this.handleButtonClick}>React</button>
</div>



)
}
}

export default Hello;