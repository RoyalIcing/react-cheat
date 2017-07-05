import makeOrganism from 'react-organism'
import extractFromDOM from 'react-organism/lib/adjustArgs/extractFromDOM'
import Editor from '../../molecules/ReactComponentEditor'
import * as stateHandlers from './state'

export default makeOrganism(Editor, stateHandlers, {
  adjustArgs: extractFromDOM
})