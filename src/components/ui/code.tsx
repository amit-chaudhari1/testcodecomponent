import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

import "../../styles/code.css";
import { useEffect, useState } from "react";

async function highlightCode(code: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      keepBackground: false,
      theme: "vitesse-light",
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
//
// const formattedCode = `
// \`\`\` ${language} ${options}
// ${code}
// \`\`\`
// `;
// const highlightedCode = await highlightCode(formattedCode);

export function Code(props) {
  const [formattedCode, setFormattedCode] = useState("");
  const [selectedLines, setSelectedLines] = useState("");

  const handleTextSelection = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    setSelectedLines(selectedText);

    const range = selection.getRangeAt(0);
    const startNode = range.startContainer;
    const endNode = range.endContainer;

    const startLine = getLineNumber(startNode);
    const endLine = getLineNumber(endNode);

    setSelectedLines([startLine, endLine]);
    console.log('Selected Text:', selectedText);
    console.log('Selected Lines:', startLine, 'to', endLine);
  };

  const getLineNumber = (node) => {
    const lines = node.parentElement.innerText.split('\n');
    const lineNumber = lines.findIndex(line => line.includes(node.textContent)) + 1;
    return lineNumber;
  };

  useEffect(() => {
    async function LoadformattedCode(code, options) {
      const language = options.lang;
      const opt = options.options;
      const formattedCode = `
\`\`\` ${language} ${opt}
${code}
\`\`\` 
`;
      return await highlightCode(formattedCode);
    }
    LoadformattedCode(props.code, {
      lang: "js",
      options: "showLineNumbers",
    }).then((e) => setFormattedCode(e));
  }, [formattedCode, props.code]);

  return (
    <div>
      <h3>Selected Text: {selectedLines}</h3>
      <section
        onMouseUp={handleTextSelection}
        dangerouslySetInnerHTML={{
          __html: formattedCode,
        }}
      />
    </div>
  );
}
