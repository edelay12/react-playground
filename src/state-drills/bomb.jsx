import React from 'react'



class Bomb extends React.Component {
constructor(props){
    super(props) 
    this.state = { count:0 };
}
componentDidMount() {
    setInterval(() => {
        this.setState({
          count : this.state.count + 1,
          tick : 'tick'
        })
        if(this.state.count >= 8) {
            this.setState({tick: 'BOOM!!!!', count: 0});
        } else {
            this.state.count % 2 ? this.setState({tick : 'tick'}) : this.setState({tick: 'tock'});
            
        }
      }, 1000)


  

}


componentWillUnmount() {
    clearInterval(this.interval);
  }
render() {
    return (
        <div>
            <p>
                {this.state.tick}
            </p>

        </div>
    )
}

}

export default Bomb;