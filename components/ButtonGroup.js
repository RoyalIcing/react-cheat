import Button from './Button'

export default ({
  items,
  activeID,
  onChangeID
}) => (
  <div>
  {
    items.map(({ id, title }) => (
      <Button
        active={ id === activeID }
        title={ title }
        onClick={ () => onChangeID(id) }
      />
    ))
  }
  </div>
)