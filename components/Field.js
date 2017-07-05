export default ({
  label,
  value,
  defaultValue,
  readOnly,
  index,
  onChange
}) => (
  <div>
    { label && <label>{ label }</label> }
    <input
      defaultValue={ defaultValue }
      value={ value }
      readOnly={ readOnly }
      onChange={ onChange }
      data-index_number={ index }
    />
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