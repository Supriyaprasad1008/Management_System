import React from 'react'

const FailList = ({ data, onDelete }) => {
  return (
    <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md">
      <div className="mb-5 flex items-center justify-between">
        <button className="rounded-full bg-white/15 px-4 py-1 text-sm font-bold text-white">
          {data.category}
        </button>

        <h2 className="text-2xl font-bold text-white">
          {data.date}
        </h2>

        <span className="rounded-full bg-white/15 px-4 py-1 text-sm text-white/80">
          Failed
        </span>
      </div>

      <div className="min-h-[260px] rounded-xl border border-dashed border-white/20 bg-slate-950/20 p-4 flex flex-col">
        <h2 className="text-xl font-bold text-white">{data.title}</h2>
        <p className="text-lg font-serif text-gray-900 text-center">
          {data.description}
        </p>
        <div className="flex justify-center mt-auto pt-4">
          <button className="rounded-full bg-red-700 px-5 py-1 text-white text-sm font-bold">
            Failed
          </button>
          <button onClick={onDelete} className="rounded-xl border border-red-300/30 bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-100 backdrop-blur-md transition hover:bg-red-500/30">
            Delete
          </button>

        </div>
      </div>

    </div>
  )
}

export default FailList
