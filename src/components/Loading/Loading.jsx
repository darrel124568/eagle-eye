function LoadingNavbar() {
  return (
    <div className="w-full h-14 border-b border-gray-200 bg-white px-6 shadow-sm animate-pulse flex items-center justify-between gap-4">
      <div className="h-6 w-24 rounded bg-gray-200" />
      <div className="h-6 w-24 rounded bg-gray-200" />
      <div className="h-6 w-24 rounded bg-gray-200" />
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}

function LoadingCard() {
  return (
    <div className="w-full min-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-sm animate-pulse">
      <div className="h-40 w-full rounded-lg bg-gray-200 mb-4" />
      <div className="h-4 w-3/4 rounded bg-gray-200 mb-2" />
      <div className="h-4 w-1/2 rounded bg-gray-200 mb-4" />
      <div className="flex items-center gap-3">
        <div className="h-3 w-24 rounded bg-gray-200" />
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="h-full w-full bg-gray-50 flex flex-col">
      <LoadingNavbar />
      <div className="flex-1 flex items-center justify-center p-4 gap-4 flex-wrap">
        <LoadingCard />
        <LoadingCard/>
      </div>
    </div>
  );
}

export default Loading;