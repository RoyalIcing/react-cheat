import React from 'react'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'
import js from 'react-syntax-highlighter/dist/languages/javascript'
import style from 'react-syntax-highlighter/dist/styles/atom-one-light'

registerLanguage('javascript', js)

export default ({
  children
}) => (
  <SyntaxHighlighter
    language='javascript'
    style={ style }
    children={ children.trim() }
  />
)
