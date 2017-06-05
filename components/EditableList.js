import Row from './Row'

export default ({
  items,
  renderItemAtIndex,
  onAdd,
  onChangeAtIndex,
  onRemoveAtIndex
}) => (
  <div className='mb-3'>
  {
    items.map((item, index) => (
      <Row key={ index } bottomSpacing={ 2 }>
        { renderItemAtIndex({ item: items[index], index, onChangeAtIndex }) }
        <button onClick={ (event) => onRemoveAtIndex({ index }) }>−</button>
      </Row>
    ))
  }
    <button onClick={ onAdd }>+</button>
  </div>
)