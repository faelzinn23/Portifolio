export default function Header() {
  return (
    <div className="sticky top-0 
                    z-50 
                    flex 
                    h-max 
                    w-full 
                    justify-between
                    px-15 
                    py-5
                    bg-black/10
                    backdrop-blur-md
                    ">
      <h1>Raphael Oliveira</h1>
      <nav>
        <ul className="flex gap-10">
            <li>
              <a href="#sobre">
                Sobre
              </a>
            </li>
            <li>
              <a href="#projetos">
                Projetos
              </a>
            </li>
            <li>
              <a href="#competencias">
                Competencioas
              </a>
            </li>
            <li>
              <a href="#contato">
                Contato
              </a>
            </li>

        </ul>
      </nav>
    </div>
    
    
  )
}
