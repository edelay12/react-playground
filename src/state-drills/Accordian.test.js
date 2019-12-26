import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Sections from './state-drills/Accordian'
describe(`accordian Component`, () => {
    const sections = [
        {title: 'First section', content: 'Section 1 content....'},
        {title: 'Second section', content: 'Section 2 content....'}
        ]

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sections />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Sections />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the first tab by default', () => {
    const wrapper = shallow(<Sections sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

it('renders empty given no tabs', () => {

})