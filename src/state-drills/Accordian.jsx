import React from 'react'

export default class Section extends React.Component {
    static defaultProps = { sections: [] };
    state = {
        currentSectionIndex: 0
    };
    handleButtonClick(index) {
        console.log(index)
        this.setState({currentSectionIndex : index });

    }

   renderButton(){
       return this.props.sections.map((secction, index) => (
           <button key={index} onClick={() => this.handleButtonClick(index)}>
               {secction.title}
           </button>
       )
        ) }
    
renderSection() {
    
    let currentSection = this.props.sections[this.state.currentSectionIndex]
    console.log(currentSection)
return (
    <p>
        {currentSection.content}
    </p>
)
}
    render() {
        return (
        <ul>
<li>
    <h1>{this.renderButton()}</h1>
    <div>{this.props.sections.length && this.renderSection()}</div>
</li>
        </ul>
        )}
}