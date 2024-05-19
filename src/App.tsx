import './App.css'
import { Code } from './components/ui/code'

// let us define a simple code fragment
let codeFragment = 
  `
import { SparklesCore } from "@/components/ui/sparkles";
import { AspectRatio } from "./ui/aspect-ratio";

export function CreativeCoding() {
  return (
    <div className="py-20">
      <h1 className="scroll-m-20 text-center text-5xl font-extralight tracking-tight lg:text-8xl ">
        /CreativeCoding
      </h1>

      <div className="w-7xl h-20 relative">
        <div className="p-20 w-full" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 " />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-4/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-4/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-20 w-4/4 blur-sm" />

        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(550px_150px_at_top,black,transparent_80%)]">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={2}
            particleDensity={2200}
            className="w-full h-full"
            particleColor="#A0A0A0"
          />
        </div>
      </div>

      {
        // <blockquote className="mb-20 border-l-2 pl-6 italic">
        //   Right after 12th, during times that I had lost hope, lost expectations that I could do anything in life.
        //   <br />
        //   Writing short snippets of pretty math equations gave me the shimmer i needed to push forward.
        //   <br />
        //   <br />
        //   Ultimately, no matter how ugly the code is, what matters is that it runs.
        //   <br />
        //   Similarly, no matter how ugly things get in life, what matters is that you keep going, keep standing back up.
        // </blockquote>
      }

      <div className="grid grid-col-1 gap-y-[10rem] justify-center ">
        <div>
          <h2 className="pb-5 px-10 mt-10 scroll-m-20 border-b text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Generative Art
          </h2>
          <AspectRatio
            ratio={16 / 9}
            className="m-10 border-2 border-foreground rounded"
          >
            <img
              src="https://source.unsplash.com/1920x1080/?nature"
              className="m-10 border-2 border-foreground rounded"
              alt="Project Image"
            />
          </AspectRatio>
        </div><div>
          <h2 className="pb-5 px-10 mt-10 scroll-m-20 border-b text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Generative Art
          </h2>
          <AspectRatio
            ratio={16 / 9}
            className="m-10 border-2 border-foreground rounded"
          >
            <img
              src="https://source.unsplash.com/1920x1080/?nature"
              className="m-10 border-2 border-foreground rounded"
              alt="Project Image"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
}
`


  // TODO : Add error boundar
  function App() {

  return (
    <>
      <h1>Code</h1>
      <Code code={codeFragment}>
      </Code>
    </>
  )
}

export default App
