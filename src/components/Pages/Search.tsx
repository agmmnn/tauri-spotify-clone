import clsx from "clsx"
import searchcards from "../../data/search_cards.json"

export function Search() {
  return (
    <div className="pb-32">
      <div className="grow pb-5 text-2xl font-bold">Browse all</div>
      <div className="grid grid-cols-5 gap-6">
        {searchcards.map((i) => (
          <div
            className={clsx(
              "relative h-52 w-52 cursor-pointer rounded-lg before:block before:pt-[100%]",
              bgColors[Math.floor(Math.random() * bgColors.length)]
            )}
          >
            <div className="absolute inset-0 overflow-hidden">
              <span className="line-clamp-1 p-4 text-2xl font-bold">
                {i.title}
              </span>
              <img
                src={i.img}
                alt=""
                className="shadow-spotify absolute bottom-0 right-0 h-[6.25rem] w-[6.25rem] translate-x-[18%] translate-y-[5%] rotate-[25deg]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const bgColors = [
  "bg-blue-700",
  "bg-blue-950",
  "bg-green-700",
  "bg-orange-700",
  "bg-orange-600",
  "bg-cyan-700",
]
