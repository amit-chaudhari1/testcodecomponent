//we want to create a hook called use playground which is responsible for all the following:
// 1. Making sure the theme, language and the code body are according to the user preferences.
// 2. coversion of the Code to HAST 
// 3. acceptHMR update 
// 4. use local storage to store the theme
//

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { bundledLanguagesInfo, bundledThemesInfo, getHighlighter } from "shiki"


export async function Playground (code: string) {
  //const lang and theme will be replaced by local storage values 
  // const  lang = 'typescript'
  // const theme = 'vitesse-dark'
  
  // was storing a ref to these
  // const allThemes = bundledThemesInfo[]
  // const allLangs = bundledLanguagesInfo[];

  // const input = useLocalStorage('input', '')

  //ref to a pre
  // const output = '<pre></pre>'
  //
  // const preStyle = '';
  // const isLoading = true;
  //
  // async function () {
  //   getHighlighter({
  //     langs: [lang],
  //     themes: [theme],
  //   })
  //   //bundled language info and theme info dynamically imported
  //
  //   const samplesCache = new Map<string, Promise<string|undefined>>()
  //
  //   function fetchSample(id:string){
  //   if (!samplesCache.has(id)) {
  //       samplesCache.set(id, fetch(`https://raw.githubusercontent.com/antfu/textmate-grammars-themes/main/samples/${id}.sample`)
  //         .then(r => r.text())
  //         .catch((e) => {
  //           console.error(e)
  //           return undefined
  //         }))
  //     }
  //     return samplesCache.get(id)!
  //   }
  // }
  //
  // if (typeof window !== 'undefined') {
  //   const highligher = await getHighlighter({
  //     langs: [lang],
  //     themes: [theme],
  //   })
  // }
  //
  const lang = 'typescript'
  const theme = 'vitesse-dark'

  const source = code ||  "THIs is code"  
  const highlighter = await getHighlighter({
    langs: [lang],
    themes: [theme],
  })
  const output = highlighter.codeToHtml(source, {
    lang,
    theme,
  })
  console.log(output)
  return output
}
