import cards from "../../data/cards.json"

export function Home() {
  return (
    <div>
      {Object.keys(cards).map((item) => (
        <div>
          <div className="mb-4 flex">
            <a href="#" className="grow text-2xl font-bold">
              {item}
            </a>
            <a href="#" className="text-sm font-semibold text-neutral-400">
              Show all
            </a>
          </div>
          <div className="flex flex-row gap-6">
            {cards[item].map((card) => (
              <div className="mb-7 w-3/4 cursor-pointer rounded-md border-none bg-[#181818] p-4 shadow-none transition-colors duration-200 hover:bg-[#282828] hover:shadow-lg">
                <div className="XiVwj5uoqqSFpS4cYOC6 ">
                  <div className="xBV4XgMq0gC5lQICFWY_ ">
                    <div className="g4PZpjkqEh5g7xDpCr2K ">
                      <div className="h-">
                        <img
                          aria-hidden="false"
                          draggable="false"
                          loading="lazy"
                          src={card.img}
                          data-testid="card-image"
                          alt=""
                          className={
                            card.desc !== "Artist"
                              ? "rounded-md"
                              : "aspect-square  rounded-full object-cover"
                          }
                        />
                      </div>

                      {/* play button */}
                      {/* <div className="rounded-full bg-[#1fdf64] shadow-2xl animate-in fade-in slide-in-from-bottom duration-500 ">
                        <button data-testid="play-button">
                          <span className="">
                            <span
                              aria-hidden="true"
                              className="absolute left-3 top-3"
                            >
                              <svg
                                role="img"
                                height="24"
                                width="24"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-encore-id="icon"
                                className=" fill-black "
                              >
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div> */}
                    </div>
                  </div>
                  <div className="E1N1ByPFWo4AJLHovIBQ">
                    <div className="pb-2 pt-4 font-semibold">{card.title}</div>
                    <div className="text-sm text-[#9a9a9a]">
                      <span>{card.desc}</span>
                    </div>
                  </div>
                  <div
                    className="tsv7E_RBBw6v0XTQlcRo"
                    data-testid="card-click-handler"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="p-12"></div>
    </div>
  )
}
