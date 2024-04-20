import * as React from "react"
import { EditorState, basicSetup } from '@codemirror/basic-setup';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { useEffect , useRef} from "react";
import { oneDark } from '@codemirror/theme-one-dark';

export function Editor(props){

   const editor = useRef();

    const startState = EditorState.create({
      doc : props.children.toString(),
      extensions: [
        // basicSetup,
        // keymap.of([ indentWithTab]),
        // oneDark,
        // javascript(),
      ],
    });

  useEffect(() => {

    const view = new EditorView({ state: startState, parent: editor.current });

    return () => {
      view.destroy();
    };
  }, []);
  return <div ref={editor}> </div>;
}
