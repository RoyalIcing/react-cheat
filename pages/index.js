import { Component } from 'react'
import Main from '../molecules/Main'
import * as reactComponentState from '../organisms/reactComponentEditor/state'
import makeOrganism from '../organisms/make'
import ReactComponentEditor from '../molecules/ReactComponentEditor'

const EditorOrganism = makeOrganism(reactComponentState, ReactComponentEditor)

export default () => (
  <Main>
    <h1>React Cheat</h1>
    <EditorOrganism />
  </Main>
)
