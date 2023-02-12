const PromoBanner = ({ children }) => (
  <div className="bg-black hover:bg-zinc-900">
    <div className="container h-10 text-white flex items-center justify-end">
      <h1 className="text-sm font-normal">{children}</h1>
    </div>
  </div>
)

export default PromoBanner
