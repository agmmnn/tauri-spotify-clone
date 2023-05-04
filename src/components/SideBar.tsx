import { Link, useLocation } from "wouter"
import { spotifyPlaylists } from "../data/playlists"
import clsx from "clsx"

export function SideBar() {
  const [location, setLocation] = useLocation()

  return (
    <div className="h-screen w-60 bg-black p-6 ">
      {/* <div role="banner" className="w-32">
        <a href="/">
          <svg viewBox="0 0 1134 340" className="">
            <path
              fill="currentColor"
              d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
            />
          </svg>
        </a>
      </div> */}

      <ul className="pt-1 text-sm font-semibold">
        {routes1.map((i) => (
          <li>
            <Link
              href={i.href}
              className={clsx(
                "flex h-10 cursor-pointer items-center gap-4 rounded no-underline transition-colors duration-300 hover:fill-white hover:text-white hover:no-underline",
                location !== i.href
                  ? "fill-gray-400 text-gray-400"
                  : "fill-white text-white"
              )}
            >
              <svg height="24" width="24" className="" viewBox="0 0 24 24">
                {location !== i.href ? i.icon : i.iconActive}
              </svg>
              <span>{i.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="border-b border-[#282828] pb-1 pt-8 text-sm font-semibold">
        {routes2.map((i) => (
          <li>
            <Link
              href={i.href}
              className={clsx(
                "flex h-10 cursor-pointer items-center gap-4 rounded no-underline transition-colors duration-300 hover:fill-white hover:text-white hover:no-underline",
                location !== i.href
                  ? "fill-gray-400 text-gray-400"
                  : "fill-white text-white"
              )}
            >
              {i.icon}
              <span>{i.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="overflow-auto scrollbar">
        <ul className=" pt-3">
          {spotifyPlaylists.map((i) => (
            <a
              href={`/playlist/${i.playlist}`}
              className={clsx(
                "mb-2 cursor-default whitespace-nowrap text-sm font-normal no-underline hover:text-white hover:no-underline",
                location !== `/playlist/${encodeURI(i.playlist)}`
                  ? "text-[#b3b3b3]"
                  : "text-white"
              )}
            >
              <li className="py-[5px]">
                <span className="w-auto"> {i.playlist}</span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}

const routes1 = [
  {
    title: "Home",
    href: "/",
    icon: (
      <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
    ),
    iconActive: (
      <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z" />
    ),
  },
  {
    title: "Search",
    href: "/search",
    icon: (
      <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
    ),
    iconActive: (
      <svg>
        <path d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"></path>
        <path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path>
      </svg>
    ),
  },
  {
    title: "Your Library",
    href: "/library",
    icon: (
      <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
    ),
    iconActive: (
      <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
    ),
  },
]

const routes2 = [
  {
    title: "Create Playlist",
    href: "/create",
    icon: (
      <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white bg-opacity-60 text-black group-hover:bg-opacity-100">
        <svg
          viewBox="0 0 16 16"
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" fill="currentColor"></path>
          <path fill="none" d="M0 0h16v16H0z"></path>
        </svg>
      </span>
    ),
  },
  {
    title: "Liked Songs",
    href: "/collection/tracks",
    icon: (
      <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-gradient-to-br from-purple-700 to-blue-300 text-white opacity-70 group-hover:opacity-100">
        <svg
          viewBox="0 0 16 16"
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h16v16H0z"></path>
          <path
            fill="currentColor"
            d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
          ></path>
        </svg>
      </span>
    ),
  },
]
