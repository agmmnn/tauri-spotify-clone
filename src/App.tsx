import { useState } from "react"
import reactLogo from "./assets/react.svg"
import { invoke } from "@tauri-apps/api/tauri"
import { SideBar } from "./components/SideBar"
import { Page } from "./components/Page"
import "./App.css"
import { TailwindIndicator } from "./components/tailwind-indicator"
import { Player } from "./components/Player"

function App() {
  const [greetMsg, setGreetMsg] = useState("")
  const [name, setName] = useState("")

  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  async function greet() {
    setGreetMsg(await invoke("greet", { name }))
  }

  // Prevent right-click context menu on production
  if (process.env.NODE_ENV === "production") {
    document.addEventListener("contextmenu", (event) => event.preventDefault())
  }

  return (
    <div className="select-none">
      <div className="flex h-screen flex-row overflow-clip rounded-lg bg-transparent text-white dark:border-[#413a43]">
        {/* border border-[#474d5e] */}
        <div className="flex flex-grow flex-row">
          <div className="w-fit">
            <SideBar />
          </div>
          <div className="w-full">
            <Page />
          </div>
        </div>
        <div className="fixed bottom-0 w-full ">
          <Player />
        </div>
        <TailwindIndicator />
      </div>
    </div>
  )
}

export default App
