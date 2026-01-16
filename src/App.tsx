import { Countdown } from "./components/Countdown"
import { ImageFadeGrid } from "./components/ImageFadeGrid"
//import { TickCounter } from "./components/TickCounter"


function App() {
 

  return (
    <>
      <section className="mx-auto w-full max-w-md mt-10 text-center bg-background m-5">
        <div className="flex">
          <img 
             src="/nombres-04.png" 
             alt="Florencia&Federico"
             className="w-11/12 h-auto mx-auto object-contain" 
          />
        </div>

        <div>
           {/* Subtítulo (si lo tienen como texto) */}
          <p className=" text-2xl w-full uppercase tracking-wider text-title font-[var(--font-montserrat-medium)] mt-16 ">
            ¡Nos casamos!
          </p>
           <Countdown targetDate="2026-04-11T00:00:00-03:00" />
        </div>
        
        <div>
          <p className="text-lg font-[var(--font-playfair)] italic text-title mt-16">
            Queremos vivir este momento rodeados de personas
            que han formado parte de nuestra historia.
            </p>
        </div>

        <div>
          <ImageFadeGrid
            images={[
              "/fotos/1.jpg",
              "/fotos/2.jpg",
              "/fotos/3.jpg",
              "/fotos/4.jpg",
              "/fotos/5.jpg",
              "/fotos/6.jpg",
            ]}
          />
        </div>

{/* Agendar fecha */}
        <div className="mt-7">
          <div>
      <img
        src="/gifts/fecha.gif"
        alt="fecha_gift"
        className="mx-auto h-auto w-32 object-contain"
      />
           <h2 className="text-xl text-title tracking-wider uppercase">Agenda la fecha</h2>
          </div>          
          <img 
             src="/fecha.png" 
             alt="Florencia&Federico"
             className="w-11/12 h-auto mx-auto object-contain mt-10" 
          />
          
        </div>
  <         p className="text-lg font-[var(--font-playfair)] italic text-title mt-16">
            Intinerario
            </p>
        <div>

          <div className="space-y-10">
            <div className="">
              <img 
              src="/gifts/ceremonia.gif" 
              alt="gift_ceremonia" 
              className="mx-auto h-auto w-32 object-contain"
              />

              <h2 className="text-2xl text-title tracking-wider uppercasemt-2">
                CEREMONIA RELIGIOSA
              </h2>

              <p className="text-lg text-texto tracking-wide uppercase mt-5 mb-10">
                18:45 horas <br/>
                Santuario de María Auxiliadora.
              </p>

              <a 
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/d8PuJ2cLz4NkzbyJ6"
              className="px-5 py-1 text-xl uppercase border-2 border-gray-500 rounded-full focus:ring-1 mt-5"
              >
                CÓMO LLEGAR
              </a>
            </div>

            <div className="">
              <img 
              src="/gifts/recepción.gif" 
              alt="gift_recepción" 
              className="mx-auto h-auto w-32 object-contain"
              />

              <h2 className="text-2xl text-title tracking-wider uppercase mt-2">
                recepción
              </h2>

              <p className="text-lg text-texto tracking-wide uppercase mt-5 mb-10">
                20:00 horas <br/>
                Salón Te Grey.
              </p>

              <a 
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/KT56ukZHprpfa7vP7"
              className="px-5 py-1 text-xl uppercase border-2 border-gray-500 rounded-full focus:ring-1 mt-5"
              >
                CÓMO LLEGAR
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <div className="bg-[#c7dae6] p-6 mt-10 mb-5">
              <img 
              src="/gifts/luna de miel.gif" 
              alt="gift_lunaDeMiel" 
              className="mx-auto h-auto w-32 object-contain"
              />

              <h2 className="text-2xl text-texto tracking-wider uppercase mt-2">
                LUNA DE MIEL
              </h2>

              <p className="text-lg text-title uppercase mt-5 mb-10">
               Si desean hacernos un regalo
               les agradecemos nos ayuden
               en nuestra luna de miel.
              </p>

              <a 
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/KT56ukZHprpfa7vP7"
              className="px-5 py-1 text-xl uppercase border-2 border-gray-500 rounded-full focus:ring-1 mt-5"
              >
                CONTRIBUIR
              </a>
            </div>

              <div className="">
              <img 
              src="/gifts/desscode.gif" 
              alt="gift_desscode" 
              className="mx-auto h-auto w-32 object-contain"
              />

              <h2 className="text-2xl text-title tracking-wider uppercase mt-2">
                dress code
              </h2>

              <p className="text-lg text-texto tracking-wide uppercase mt-5 mb-10">
                Formal - Elegante
              </p>

            </div>

        </div>

            <div className="bg-asistencia p-6 mt-7 h-auto pb-10">
              <img 
              src="/gifts/asistencia.gif" 
              alt="gift_asistencia" 
              className="mx-auto h-auto w-32 object-contain"
              />

              <h2 className="text-2xl text-white tracking-wider uppercase mt-2 mb-10">
                CONFIRMÁ TU ASISTENCIA
              </h2>

              <a 
              target="_blank"
              rel="noreferrer"
              href="https://forms.gle/w7mum2aWdHDpxa9BA"
              className="px-5 py-1 text-xl uppercase border-2 text-white border-white rounded-full focus:ring-1 "
              >
                COMPLETÁ EL FORMULARIO
              </a>
            </div>
      </section>
    </>
  )
}

export default App
