export default (handlersIn) => class Organism extends React.Component {
  state = handlersIn.initial(this.props)

  handlers = Object.keys(handlersIn).reduce((out, key) => {
    out[key] = (...args) => {
      const stateChanger = handlersIn[key].apply(this, args)
      console.log('stateChanger', stateChanger.length, stateChanger)
      if (stateChanger) {
        this.setState(stateChanger)
      }
    }
    return out
  }, {})

  render() {
    const Component = this.props.Component
    return <Component { ...this.props } { ...this.state } handlers={ this.handlers } />
  }
}
