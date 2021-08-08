import { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {uploadImageCallBack} from '../utils/upload-image'

const EditorWithToolBar = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const onChange = (state: EditorState) => {
    setEditorState(state);
  };

  return (
    <div className='editor'>
      <Editor
        editorState={editorState}
        onEditorStateChange={onChange}
        localization={{
            locale: 'zh'
        }}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: true },
          },
        }}
      />
    </div>
  );
};


export default EditorWithToolBar
