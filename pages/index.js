import { Component } from 'react'
import makeOrganism from 'react-organism'
import Main from '../molecules/Main'
import EditorOrganism from '../organisms/reactComponentEditor'
// import * as reactComponentState from '../organisms/reactComponentEditor/state'
// import ReactComponentEditor from '../molecules/ReactComponentEditor'

// const EditorOrganism = makeOrganism(ReactComponentEditor, reactComponentState)

export default () => (
  <Main>
    <h1>React Cheat</h1>
    <EditorOrganism />
  </Main>
)
