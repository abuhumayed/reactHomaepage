import ReactLogo from '../images/react-icon-small.png'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-dark-blue pt-8 pb-8">
      <div className="flex items-center gap-2 pl-5">
        <img src={ReactLogo} className="size-7" />
        <h1 className="text-regal font-bold text-xl ">ReactFacts</h1>
      </div>
      <h2 className="text-gray-300 pr-4">React Course - Project 1</h2>
    </div>
  )
}
