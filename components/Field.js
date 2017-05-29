export default ({
  label,
  value,
  onChange
}) => (
  <div>
    { label && <label>{ label }</label> }
    <input value={ value } onChange={ onChange } />
    <style jsx>{`
div {
  flex-grow: 1;
}
input {
  display: block;
  width: 100%;
}
label {
  display: block;
  font-weight: bold;
}
`}</style>
  </div>
)