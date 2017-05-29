import classesPresent from './classesPresent'

export default ({
  children,
  bottomSpacing = false
}) => (
  <div className={ classesPresent(['row', bottomSpacing && 'bottomSpacing']) }>
    { children }
    <style jsx>{`
.row {
  display: flex;
}
.bottomSpacing {
  margin-bottom: 0.5rem;
}
`}</style>
  </div>
)