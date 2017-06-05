import React from 'react'
import ReactComponentCode from './ReactComponentCode'
import Row from '../components/Row'
import Field from '../components/Field'
import Label from '../components/Label'
import EditableList from '../components/EditableList'

const renderPropAtIndex = ({ item, index, onChangeAtIndex }) => (
  <Field
    value={ item }
    onChange={ (event) => { console.log('?', event.target.value); onChangeAtIndex({ index, value: event.target.value }) } }
  />
)

const renderStateAtIndex = ({ item, index, onChangeAtIndex }) => (
  <Field
    value={ item }
    onChange={ (event) => { onChangeAtIndex({ index, value: event.target.value }) } }
  />
)

export default ({
  name,
  propsList,
  stateList,
  handlers: {
    changeName,
    addProp,
    changePropAtIndex,
    removePropAtIndex,
    addState,
    changeStateAtIndex,
    removeStateAtIndex
  }
}) => (
  <div>
    <Row bottomSpacing={ 3 }>
      <Field label='Name' value={ name } onChange={ changeName } />
    </Row>
    <Label title='Props'>
      <EditableList
        items={ propsList }
        renderItemAtIndex={ renderPropAtIndex }
        onAdd={ addProp }
        onChangeAtIndex={ changePropAtIndex }
        onRemoveAtIndex={ removePropAtIndex }
      />
    </Label>
    <Label title='State'>
      <EditableList
        items={ stateList }
        renderItemAtIndex={ renderStateAtIndex }
        onAdd={ addState }
        onChangeAtIndex={ changeStateAtIndex }
        onRemoveAtIndex={ removeStateAtIndex }
      />
    </Label>
    <ReactComponentCode name={ name } propsList={ propsList } stateList={ stateList } />
  </div>
)
