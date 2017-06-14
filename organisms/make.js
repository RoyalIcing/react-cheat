export default (handlersIn, Component) => class Organism extends React.Component {
  state = handlersIn.initial(this.props)

  handlers = Object.keys(handlersIn).reduce((out, key) => {
    out[key] = (...args) => {
      const stateChanger = handlersIn[key].apply(this, args)
      if (stateChanger) {
        this.setState(stateChanger)
      }
    }
    return out
  }, {})

  render() {
    return <Component { ...this.props } { ...this.state } handlers={ this.handlers } />
  }
}
