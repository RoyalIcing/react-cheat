export default ({
  label,
  value,
  readOnly,
  onChange
}) => (
  <div>
    { label && <label>{ label }</label> }
    <input value={ value } readOnly={ readOnly } onChange={ onChange } />
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