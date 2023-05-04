// this section is copied from (and modified)
// https://github.com/tayfunerbilen/react-tailwind-spotify-clone/blob/main/src/components/BottomBar/Player.js

export function Player() {
  return (
    <div className="border-t border-[#282828]">
      <div className="flex h-fit w-screen min-w-[620px] flex-col overflow-clip rounded-b-lg  bg-[#181818]">
        <div className=" h-24">
          <div className="flex h-full items-center justify-between px-4">
            <div className="w-[30%] min-w-[11.25rem]">
              <div className="flex items-center">
                <div className="mr-3 flex items-center">
                  <div className="group relative mr-3 h-14 w-14 flex-shrink-0">
                    <img
                      src="https://i.scdn.co/image/ab67616d000048511f3784b43dbc8566a24473f2"
                      alt=""
                    />
                    <button className="absolute right-1 top-1 flex h-6 w-6 rotate-90 items-center justify-center rounded-full bg-black opacity-0 group-hover:opacity-60 hover:scale-[1.06] hover:!opacity-100">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          points="15.54,21.151 5.095,12.229 15.54,3.309 16.19,4.069 6.635,12.229 16.19,20.39 "
                          fill="currentColor"
                        ></polygon>
                      </svg>
                    </button>
                  </div>
                  <div>
                    <h6 className="line-clamp-1 text-sm">
                      Won't Forget You (Edit)
                    </h6>
                    <p className="text-[0.688rem] text-white text-opacity-70">
                      Shouse
                    </p>
                  </div>
                </div>
                {/* like button */}
                <button className="flex h-8 w-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                  >
                    <path
                      fill="currentColor"
                      d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex w-[40%] max-w-[45.125rem] flex-col items-center px-4 pt-2">
              <div className="flex items-center gap-x-2">
                {/* shuffle button */}
                <button className="flex h-8 w-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    fill="currentColor"
                  >
                    <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
                    <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
                  </svg>
                </button>
                {/* prev button */}
                <button className="flex h-8 w-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    fill="currentColor"
                  >
                    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
                  </svg>
                </button>
                {/* play button */}
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black hover:scale-[1.06]">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                  >
                    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                  </svg>
                </button>
                {/* next button */}
                <button className="flex h-8 w-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    fill="currentColor"
                  >
                    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
                  </svg>
                </button>
                {/* repeat button */}
                <button className="flex h-8 w-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    fill="currentColor"
                  >
                    <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
                  </svg>
                </button>
              </div>
              <div className="mt-1.5 flex w-full items-center gap-x-2">
                <div className="text-[0.688rem] text-white text-opacity-70">
                  02:44
                </div>
                <div
                  className="group flex h-7 w-full"
                  style={{ transform: "scale(1)", cursor: "pointer" }}
                >
                  <div
                    className="h-1 w-full self-center rounded-md"
                    style={{
                      background:
                        "linear-gradient(to right, rgb(29, 185, 84) 0%, rgb(29, 185, 84) 68.8602%, rgb(83, 83, 83) 68.8602%, rgb(83, 83, 83) 100%)",
                    }}
                  >
                    <div
                      draggable="false"
                      role="slider"
                      className="h-3 w-3 rounded-full bg-white opacity-0 group-hover:opacity-100"
                      style={{
                        position: "absolute",
                        zIndex: 0,
                        cursor: "grab",
                        userSelect: "none",
                        touchAction: "none",
                        boxShadow: "rgba(0, 0, 0, 0.5) 0px 2px 4px 0px",
                        transform: "translate(180.041px, -4px)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="text-[0.688rem] text-white text-opacity-70">
                  03:59
                </div>
              </div>
            </div>
            <div className="flex w-[30%] min-w-[11.25rem] items-center justify-end">
              {/* queue */}
              <button className="flex h-8 w-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  fill="currentColor"
                >
                  <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
                </svg>
              </button>
              {/* device */}
              <button className="flex h-8 w-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                <svg
                  role="presentation"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                >
                  <path d="M2 3.75C2 2.784 2.784 2 3.75 2h8.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 12.25 12h-8.5A1.75 1.75 0 0 1 2 10.25v-6.5zm1.75-.25a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-8.5zM.25 15.25A.75.75 0 0 1 1 14.5h14a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1-.75-.75z"></path>
                </svg>
              </button>
              {/* volume */}
              <button className="flex h-8 w-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                <svg
                  role="presentation"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  aria-label="Volume medium"
                  id="volume-icon"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  fill="currentColor"
                >
                  <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path>
                </svg>
              </button>
              <div className="w-[5.813rem] max-w-full">
                <div className="group flex h-7 w-full cursor-pointer">
                  <div className="h-1 w-full self-center rounded-md bg-white hover:bg-[#1db954]">
                    <div
                      draggable="false"
                      role="slider"
                      className="h-3 w-3 rounded-full bg-white opacity-0 group-hover:opacity-100"
                      style={{
                        position: "absolute",
                        zIndex: 0,
                        cursor: "grab",
                        userSelect: "none",
                        touchAction: "none",
                        boxShadow: "rgba(0, 0, 0, 0.5) 0px 2px 4px 0px",
                        transform: "translate(87px, -4px)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <button className="flex h-8 w-8 items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  fill="currentColor"
                >
                  <path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path>
                </svg>
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
