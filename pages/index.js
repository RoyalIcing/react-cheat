import { Component } from 'react'
import Main from '../molecules/Main'
// import ReactComponentOrganism from '../organisms/reactComponentEditor/index'
import * as reactComponentState from '../organisms/reactComponentEditor/state'
import makeOrganism from '../organisms/make'
import ReactComponentEditor from '../molecules/ReactComponentEditor'

const ReactComponentOrganism = makeOrganism(reactComponentState)

export default () => (
  <Main>
    <h1>React Cheat</h1>
    <ReactComponentOrganism Component={ ReactComponentEditor } />
  </Main>
)
