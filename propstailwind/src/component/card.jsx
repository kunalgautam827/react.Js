import React from 'react'

const Card = ({username , name , age}) => {
  return (
    <>
        
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="relative w-80 rounded-2xl overflow-hidden bg-slate-900 shadow-2xl ring-1 ring-white/10">
        
        {/* Banner */}
        <div className="h-28 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500" />

        {/* Avatar */}
        <div className="absolute top-14 left-6">
          <div className="w-20 h-20 rounded-full ring-4 ring-slate-900 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
            A
          </div>
        </div>

        {/* Body */}
        <div className="pt-14 px-6 pb-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-white text-xl font-semibold tracking-tight">{name}</h2>
              <p className="text-slate-400 text-sm mt-0.5">@{username} · he/him age : {age}</p>
            </div>
            <button className="mt-1 px-4 py-1.5 rounded-full bg-violet-600 hover:bg-violet-500 transition-colors text-white text-sm font-medium">
              Follow
            </button>
          </div>

          <p className="mt-4 text-slate-300 text-sm leading-relaxed">
            Product designer obsessed with motion & type. Building tools for the curious. 
            Currently at{" "}
            <span className="text-violet-400 font-medium">@StudioNorth</span>.
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Design", "Motion", "Typography"].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium ring-1 ring-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-5 border-t border-white/5" />

          {/* Stats */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {[
              { label: "Posts", value: "248" },
              { label: "Followers", value: "14.2k" },
              { label: "Following", value: "391" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-white font-semibold text-base">{value}</p>
                <p className="text-slate-500 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Card