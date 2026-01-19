import { Countdown } from "./components/Countdown"
import { ImageFadeGrid } from "./components/ImageFadeGrid"
import { LunaDeMielCard } from "./components/LunaDeMielCard"
import { MusicPlayer } from "./components/MusicPlayer"
//import { TickCounter } from "./components/TickCounter"


function App() {
 

  return (
    <>
      <section className="mx-auto w-full max-w-md pt-10 text-center bg-background">

          <div className="relative md:ml-32 ml-r1 mx-auto font-montserratMedium font-bold w-full max-w-[420px]">
           <div className="absolute right-3 md:top-3 -top-7 z-10 opacity-80 hover:opacity-100 ">
             <MusicPlayer src="/audio/musica.mp3" />
           </div>
          </div>

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
          <p className="md:text-lg text-base font-playfair italic text-title mt-16 px-2">
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
        className="mx-auto h-auto w-20 object-contain"
      />
           <h2 className="md:text-xl text-base text-title font-montserratMedium tracking-wider uppercase">Agenda la fecha</h2>
          </div>          
          <img 
             src="/fecha.png" 
             alt="Florencia&Federico"
             className="w-3/4 h-auto mx-auto object-contain mt-10" 
          />
          
        </div>
            <p className="text-lg font-playfair pb-10 italic text-title mt-16">
            Itinerario
            </p>
        <div>

          <div className="space-y-10">
            <div className="">
              <img 
              src="/gifts/ceremonia.gif" 
              alt="gift_ceremonia" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-xl text-base text-title font-montserratMedium tracking-wider uppercasemt-2">
                CEREMONIA RELIGIOSA
              </h2>

              <p className="md:text-lg text-xs font-montserrat text-texto tracking-wide uppercase mt-5 mb-5">
                18:45 horas <br/>
                Santuario de María Auxiliadora.
              </p>

              <a 
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/d8PuJ2cLz4NkzbyJ6"
              className="px-4 py-0.5 text-sm uppercase border font-montserrat text-gray-400 border-gray-500 rounded-full focus:ring-1"
              >
                CÓMO LLEGAR
              </a>
            </div>

            <div className="">
              <img 
              src="/gifts/recepción.gif" 
              alt="gift_recepción" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-xl text-base text-title font-montserratMedium tracking-wider uppercase mt-2">
                recepción
              </h2>

              <p className="md:text-lg text-xs font-montserra text-texto tracking-wide uppercase mt-5 mb-5">
                20:00 horas <br/>
                Salón Te Grey.
              </p>

              <a 
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/KT56ukZHprpfa7vP7"
              className="px-4 py-0.5 text-sm uppercase border font-montserrat text-gray-400 border-gray-500 rounded-full focus:ring-1"
              >
                CÓMO LLEGAR
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <LunaDeMielCard/>

              <div className="">
              <img 
              src="/gifts/desscode.gif" 
              alt="gift_desscode" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-xl text-sm text-title font-montserratMedium tracking-wider uppercase mt-2">
                dress code
              </h2>

              <p className="md:text-lg text-xs font-montserra text-texto tracking-wide uppercase mt-5 mb-10">
                Formal - Elegante
              </p>

            </div>

        </div>

            <div className="bg-asistencia p-6 mt-7 h-auto pb-10">
              <img 
              src="/gifts/asistencia.gif" 
              alt="gift_asistencia" 
              className="mx-auto h-auto w-20 object-contain"
              />

              <h2 className="md:text-xl text-base text-white font-montserratMedium tracking-wider uppercase mt-2 mb-5">
                CONFIRMÁ TU ASISTENCIA
              </h2>

              <a 
              target="_blank"
              rel="noreferrer"
              href="https://forms.gle/w7mum2aWdHDpxa9BA"
              className="px-4 py-0.5 text-sm uppercase border font-montserrat text-white border-white rounded-full focus:ring-1 "
              >
                COMPLETÁ EL FORMULARIO
              </a>
            </div>
      </section>
    </>
  )
}

export default App
