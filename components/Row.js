import classesPresent from './classesPresent'

export default ({
  children,
  bottomSpacing = false
}) => (
  <div className={ classesPresent(['row', bottomSpacing && `mb-${bottomSpacing}`]) }>
    { children }
    <style jsx>{`
.row {
  display: flex;
}
`}</style>
  </div>
)