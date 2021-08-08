import React from 'react';
import { Editor, EditorState, DraftEditorCommand, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

function App() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty(),
  );
  const onChange = (state: EditorState) => {
    setEditorState(state);
    console.log(state.getCurrentContent());
  };

  const handleKeyCmd = (
    cmd: DraftEditorCommand,
    state: EditorState,
  ): 'handled' | 'not-handled' => {
    const newState = RichUtils.handleKeyCommand(state, cmd);

    if (newState) {
      onChange(state);
      return 'handled';
    }
    return 'not-handled';
  };
  return (
    <Editor
      editorState={editorState}
      onChange={onChange}
      handleKeyCommand={handleKeyCmd}
    />
  );
}

export default App;
