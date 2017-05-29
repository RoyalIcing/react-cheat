import Main from '../molecules/Main'
import Row from '../components/Row'
import Button from '../components/Button'
import Code from '../components/Code'
import Label from '../components/Label'
import Field from '../components/Field'
import * as colors from '../components/colors'

const ColorSwatch = ({ color }) => (
  <div style={{
    display: 'inline-block',
    verticalAlign: 'baseline',
    width: '1rem',
    height: '1rem',
    backgroundColor: color,
    border: '1px solid black'
  }} />
)

export default () => (
  <Main>
    <h1>Components</h1>
    <section>
      <h2>Button</h2>
      <Row bottomSpacing>
        <Button title='−' />
      </Row>
      <Row bottomSpacing>
        <Button title='+' />
      </Row>
      <Row bottomSpacing>
        <Button title='Click me' />
      </Row>
    </section>
    <section>
      <h2>Code</h2>
      <Row bottomSpacing>
        <Code children='Example one liner' />
      </Row>
      <Row bottomSpacing>
        <Code>{`
Example
multi
liner
`}</Code>
      </Row>
    </section>
    <section>
      <h2>Label</h2>
      <Row>
        <Label title='Short' />
      </Row>
      <Row>
        <Label title='Reasonably long label' />
      </Row>
    </section>
    <section>
      <h2>Field</h2>
      <Row>
        <Field label='Label' value='Value' readOnly />
      </Row>
    </section>
    <section>
      <h2>Colors</h2>
      <Row>Dark:&nbsp; <ColorSwatch color={ colors.dark } /> &nbsp;{ colors.dark }</Row>
      <Row>Light:&nbsp; <ColorSwatch color={ colors.light } /> &nbsp;{ colors.light }</Row>
    </section>
  </Main>
)