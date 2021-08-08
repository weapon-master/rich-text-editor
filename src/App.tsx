import React from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function App() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
  const onChange = (state: EditorState) => {
    setEditorState(state)
    console.log(state.getCurrentContent())
  }
  return <Editor editorState={editorState} onChange={onChange} />;
}

export default App