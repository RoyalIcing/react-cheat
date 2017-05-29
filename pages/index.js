import { Component } from 'react'
import Main from '../molecules/Main'
import ReactComponentCode from '../molecules/ReactComponentCode'
import Row from '../components/Row'
import Field from '../components/Field'
import Label from '../components/Label'
import EditableList from '../components/EditableList'

export default class extends Component {
  state = {
    name: 'Example',
    propsList: [
      'title'
    ],
    stateList: []
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onAddProp = () => {
    this.setState(({ propsList }) => ({
      propsList: propsList.concat('')
    }))
  }

  onChangePropAtIndex = (index, event) => {
    const value = event.target.value
    this.setState(({ propsList }) => ({
      propsList: propsList.map((originalName, currentIndex) => (
        (currentIndex == index) ? value : originalName
      ))
    }))
  }

  onRemovePropAtIndex = (index) => {
    this.setState(({ propsList }) => ({
      propsList: propsList.filter((name, currentIndex) => index !== currentIndex)
    }))
  }

  renderPropAtIndex = (index) => {
    return (
      <Field
        value={ this.state.propsList[index] }
        onChange={ (event) => { this.onChangePropAtIndex(index, event) } }
      />
    )
  }

  onAddState = () => {
    this.setState(({ stateList }) => ({
      stateList: stateList.concat('')
    }))
  }

  onChangeStateAtIndex = (index, event) => {
    const value = event.target.value
    this.setState(({ stateList }) => ({
      stateList: stateList.map((originalName, currentIndex) => (
        (currentIndex == index) ? value : originalName
      ))
    }))
  }

  onRemoveStateAtIndex = (index) => {
    this.setState(({ stateList }) => ({
      stateList: stateList.filter((name, currentIndex) => index !== currentIndex)
    }))
  }

  renderStateAtIndex = (index) => {
    return (
      <Field
        value={ this.state.stateList[index] }
        onChange={ (event) => { this.onChangeStateAtIndex(index, event) } }
      />
    )
  }

  render() {
    const {
      name,
      propsList,
      stateList
    } = this.state

    return (
      <Main>
        <h1>React Cheat</h1>
        <Row bottomSpacing>
          <Field label='Name' value={ name } onChange={ this.onChangeName } />
        </Row>
        <Label title='Props'>
          <EditableList
            items={ propsList }
            renderItemAtIndex={ this.renderPropAtIndex }
            onAdd={ this.onAddProp }
            onRemoveAtIndex={ this.onRemovePropAtIndex }
          />
        </Label>
        <Label title='State'>
          <EditableList
            items={ stateList }
            renderItemAtIndex={ this.renderStateAtIndex }
            onAdd={ this.onAddState }
            onRemoveAtIndex={ this.onRemoveStateAtIndex }
          />
        </Label>
        <ReactComponentCode name={ name } propsList={ propsList } stateList={ stateList } />
      </Main>
    )
  }
}