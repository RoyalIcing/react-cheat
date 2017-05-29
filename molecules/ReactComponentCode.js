import Code from '../components/Code'

function codeForPropsList(propsList, { indent = '' } = {}) {
  if (propsList.length === 0) {
    return ''
  }

  return `{\n${indent}  ${propsList.join(`,\n${indent}  `)}\n${indent}}`
}

function makeFunctionComponent({ name, propsList }) {
  return `
export default function ${name}(${codeForPropsList(propsList)}) {
  return (
    …
  )
}
`
}

function makeClassComponent({ name, propsList, stateList, urlToLoad }) {
  return `
export default class ${name} extends Component {
  state = ${codeForPropsList(stateList, { indent: '  ' })}

  render () {
    const ${codeForPropsList(propsList, { indent: '    ' })} = this.props
    return (
      …
    )
  }
}
`
}

export default ({
  name,
  propsList,
  stateList
}) => {
  // Filter out empty strings
  propsList = propsList.filter(Boolean)
  stateList = stateList.filter(Boolean)

  return (
    <Code>{
      stateList.length > 0 ?
      makeClassComponent({ name, propsList, stateList }) :
      makeFunctionComponent({ name, propsList })
    }</Code>
  )
}