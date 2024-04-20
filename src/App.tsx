import './App.css'
import { code } from '@/components/code'
import { Editor } from './codemirror-views/jseditor'



// let us define a simple code fragment
let codeFragment = 
  `
  function App() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    )
  }
`


  // TODO : Add error boundar

  function App() {

  return (
    <>
      <Editor> {codeFragment} </Editor>
    </>
  )
}

export default App
