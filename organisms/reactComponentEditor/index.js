import makeOrganism from 'react-organism'
import Editor from '../../molecules/ReactComponentEditor'
import * as stateHandlers from './state'

export default makeOrganism(Editor, stateHandlers)