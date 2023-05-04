import { Route, useLocation } from "wouter"
import { Playlist } from "./Pages/Playlist"
import { Home } from "./Pages/Home"
import clsx from "clsx"
import { TopBar } from "./TopBar"
import { Search } from "./Pages/Search"
import { Liked } from "./Pages/Liked"

function randColor() {
  const colors = [
    ["from-red-500", "via-red-700"],
    ["from-orange-500", "via-orange-700"],
    ["from-amber-500", "via-amber-700"],
    ["from-cyan-500", "via-cyan-700"],
    ["from-pink-500", "via-pink-700"],
    ["from-gray-500", "via-gray-700"],
    ["from-neutral-500", "via-neutral-700"],
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

export function Page() {
  const [location, setLocation] = useLocation()
  const baseLoc = location.split("/")[1]
  const randomColor = randColor()

  const bg = {
    home: "bg-gradient-to-b from-[#222222] from-10% via-[#121212] via-40% to-[#121212] to-90%",
    search:
      "bg-gradient-to-b from-[#121212] from-10% via-[#121212] via-40% to-[#121212] to-90%",
    library:
      "bg-gradient-to-b from-[#121212] from-10% via-[#121212] via-40% to-[#121212] to-90%",
    collection:
      "bg-gradient-to-b from-[#543ca1] from-10% via-[#2c2053] via-40% to-[#121212] to-90%",
    playlist: `bg-gradient-to-b ${randomColor[0]} from-10% ${randomColor[1]} via-30% to-[#121212] to-90%`,
  }

  console.log(baseLoc)

  return (
    <div
      className={
        baseLoc && Object.keys(bg).includes(baseLoc) ? bg[baseLoc] : bg["home"]
      }
    >
      <TopBar />
      <div
        className={clsx(
          "h-screen overflow-auto border-[#413a43] transition-colors scrollbar scrollbar-track-transparent scrollbar-thumb-[#636363] scrollbar-track-rounded-lg scrollbar-w-3 hover:scrollbar-thumb-[#8f8f8f] dark:border-neutral-600",
          baseLoc !== "playlist" && baseLoc !== "collection" ? "p-8" : undefined
        )}
      >
        <Route path="/">
          <Home />
        </Route>

        <Route path="/index.html">
          <Home />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route path="/library">
          {(params) => (
            <div className="grow text-2xl font-bold">Your Library</div>
          )}
        </Route>

        <Route path="/collection/tracks">
          <Liked />
        </Route>

        <Route path="/playlist/:name">
          {(params) => <Playlist param={params.name} />}
        </Route>
      </div>
    </div>
  )
}
