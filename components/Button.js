export default ({
  title,
  active = false,
  onClick
}) => (
  <button children={ title } className={ active ? 'active' : undefined } onClick={ onClick } />
)