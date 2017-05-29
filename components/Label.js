export default ({
  title,
  children
}) => (
  <div>
    <label>{ title }</label>
    { children }
    <style jsx>{`
div {
  flex-grow: 1;
}
label {
  display: block;
  font-weight: bold;
}
`}</style>
  </div>
)