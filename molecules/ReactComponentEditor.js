import React from 'react'
import ReactComponentCode from './ReactComponentCode'
import Row from '../components/Row'
import Field from '../components/Field'
import Label from '../components/Label'
import ButtonGroup from '../components/ButtonGroup'
import EditableList from '../components/EditableList'

const renderPropAtIndex = ({ item, index, onChangeAtIndex }) => (
  console.log({ item, index }),
  <Field
    value={ item }
    index={ index }
    onChange={ onChangeAtIndex }
  />
)

const renderStateAtIndex = ({ item, index, onChangeAtIndex }) => (
  <Field
    value={ item }
    index={ index }
    onChange={ onChangeAtIndex }
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
      <Field label='Name' defaultValue={ name } onChange={ changeName } />
    </Row>
    <Label title='Props'>
      <EditableList
        items={ propsList }
        Item={ renderPropAtIndex }
        onAdd={ addProp }
        onChangeAtIndex={ changePropAtIndex }
        onRemoveAtIndex={ removePropAtIndex }
      />
    </Label>
    <Label title='State'>
      <EditableList
        items={ stateList }
        Item={ renderStateAtIndex }
        onAdd={ addState }
        onChangeAtIndex={ changeStateAtIndex }
        onRemoveAtIndex={ removeStateAtIndex }
      />
    </Label>
    { false && <Row bottomSpacing={ 2 }>
      <ButtonGroup activeID='normal' items={ [ { title: 'Normal', id: 'normal' }, { title: 'Organism', id: 'organism' } ] } />
    </Row> }
    <ReactComponentCode name={ name } propsList={ propsList } stateList={ stateList } />
  </div>
)
