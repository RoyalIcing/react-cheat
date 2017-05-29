import Main from '../molecules/Main'
import Row from '../components/Row'
import Button from '../components/Button'
import Code from '../components/Code'
import Label from '../components/Label'
import Field from '../components/Field'

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
      <Row>
        <Code children='Example one liner' />
      </Row>
      <Row>
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
  </Main>
)