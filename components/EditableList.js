import Row from './Row'

export default ({
  items,
  renderItemAtIndex,
  onAdd,
  onChangeAtIndex,
  onRemoveAtIndex
}) => (
  <div>
  {
    items.map((item, index) => (
      <Row key={ index } bottomSpacing>
        { renderItemAtIndex({ item: items[index], index, onChangeAtIndex }) }
        <button onClick={ () => onRemoveAtIndex(index) }>−</button>
      </Row>
    ))
  }
    <button onClick={ onAdd }>+</button>
  </div>
)