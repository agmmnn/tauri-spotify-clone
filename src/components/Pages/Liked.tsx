import { spotifyPlaylists } from "../../data/playlists"

export function Liked() {
  const today = new Date()
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "2-digit",
  }
  const formattedDate = today.toLocaleDateString("en-US", options)

  return (
    <div className="bg-cyan-">
      <div className="flex flex-row items-center p-8">
        <img
          src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
          alt=""
          className="w-60 shadow-2xl"
        />
        <div className="whitespace-nowrap pl-3 text-[76px] font-black">
          Liked Songs
        </div>
      </div>

      <div className="h-screen bg-gradient-to-b from-[#222222]/60 from-10% via-[#121212]/80 via-40% to-[#121212] to-90% p-8">
        <table className="table w-full text-sm text-gray-400">
          <thead className="border-b border-gray-600/50">
            <tr>
              <th className="p-1 text-center">#</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Album</th>
              <th className="p-3 text-left">Date Added</th>
              <th className="p-3 text-left">Duration</th>
            </tr>
          </thead>
          <tbody>
            {spotifyPlaylists[0].songs.map((i, idx) => (
              <tr>
                <td className="p-1 text-center">{idx + 1}</td>
                <td className="p-1">
                  <div className="align-items-center flex">
                    <img
                      className="h-12 w-12 rounded-sm  object-cover"
                      src="https://developer-assets.ws.sonos.com/doc-assets/portalDocs-sonosApp-defaultArtAlone.png"
                      alt="unsplash image"
                    />
                    <div className="ml-3">
                      <div className="text-white">{i.name}</div>
                      <div className="text-gray-500">{i.artist}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">Wildfire</td>
                <td className="p-3 font-bold">{formattedDate}</td>
                <td className="p-3">
                  {Math.floor(Math.random() * (5 - 2 + 1) + 2)}:
                  {Math.floor(Math.random() * (59 - 0 + 1) + 0)
                    .toString()
                    .padStart(2, "0")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
