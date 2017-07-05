import Row from './Row'

export default ({
  items,
  Item,
  onAdd,
  onChangeAtIndex,
  onRemoveAtIndex
}) => (
  <div className='mb-3'>
  {
    items.map((item, index) => (
      <Row key={ index } bottomSpacing={ 2 }>
        <Item
          item={ items[index] }
          index={ index }
          onChangeAtIndex={ onChangeAtIndex }
        />
        <button data-index_number={ index } onClick={ onRemoveAtIndex }>−</button>
      </Row>
    ))
  }
    <button onClick={ onAdd }>+</button>
  </div>
)