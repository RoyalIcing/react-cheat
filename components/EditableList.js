import Row from './Row'

export default ({
  items,
  renderItemAtIndex,
  onAdd,
  onRemoveAtIndex
}) => (
  <div>
  {
    items.map((item, index) => (
      <Row key={ index } bottomSpacing>
        { renderItemAtIndex(index) }
        <button onClick={ () => onRemoveAtIndex(index) }>−</button>
      </Row>
    ))
  }
    <button onClick={ onAdd }>+</button>
  </div>
)