import Code from '../components/Code'

function codeForPropsList(propsList, { indent = '', suffix = '' } = {}) {
  if (propsList.length === 0) {
    return ''
  }

  return `{\n${indent}  ${propsList.map(s => s + suffix).join(`,\n${indent}  `)}\n${indent}}`
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
  state = ${codeForPropsList(stateList, { indent: '  ', suffix: ': null' })}

  render () {
    const ${codeForPropsList(propsList, { indent: '    ' })} = this.props
    const ${codeForPropsList(stateList, { indent: '    ' })} = this.state

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