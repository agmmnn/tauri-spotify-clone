import { Link, useLocation } from "wouter"

export function TopBar() {
  const [location] = useLocation()

  return (
    <div data-tauri-drag-region className="mb-3 flex flex-row px-8 pt-3">
      <div data-tauri-drag-region className="flex grow flex-row gap-4 ">
        <Link href="/">
          <button
            data-testid="top-bar-back-button"
            aria-label="Go back"
            className="h-fit rounded-full bg-black/70 p-2"
            aria-expanded="false"
          >
            <svg
              role="img"
              height="16"
              width="16"
              aria-hidden="true"
              className=" fill-white"
              viewBox="0 0 16 16"
              data-encore-id="icon"
            >
              <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
            </svg>
          </button>
        </Link>

        <button
          data-testid="top-bar-forward-button"
          aria-label="Go forward"
          disabled
          className="h-fit rounded-full bg-black/70 p-2"
        >
          <svg
            role="img"
            height="16"
            width="16"
            aria-hidden="true"
            className="fill-white/50"
            viewBox="0 0 16 16"
            data-encore-id="icon"
          >
            <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
          </svg>
        </button>

        {location === "/search" && (
          <div className="relative text-[14px] font-normal text-black">
            <svg
              height="24"
              width="24"
              className="absolute left-3 top-2 fill-[#121212]"
              viewBox="0 0 24 24"
            >
              <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
            </svg>
            <input
              type="text"
              placeholder="What do you want to listen to?"
              className="h-[40px] w-[364px] rounded-full bg-white pl-12 text-black focus:outline-none"
              name=""
            />
          </div>
        )}
      </div>

      <button
        className="relative flex h-8 cursor-pointer items-center justify-center gap-2 rounded-3xl bg-black/70 p-0 text-sm font-semibold hover:bg-[#282828]"
        type="button"
        data-testid="user-widget-link"
        aria-expanded="false"
      >
        <div className="h-[28px] w-[28px]">
          <img
            aria-hidden="false"
            draggable="false"
            loading="eager"
            src="https://i.scdn.co/image/ab6775700000ee851d8e689f17e25d86b965a0fb"
            alt="agmmnn"
            className="rounded-full"
          />
        </div>
        <span
          dir="auto"
          className="text-white"
          data-testid="user-widget-name"
          data-encore-id="type"
        >
          agmmnn
        </span>
        <svg
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          className="mr-2 fill-white"
          viewBox="0 0 16 16"
          data-encore-id="icon"
        >
          <path d="m14 6-6 6-6-6h12z"></path>
        </svg>
      </button>
    </div>
  )
}
