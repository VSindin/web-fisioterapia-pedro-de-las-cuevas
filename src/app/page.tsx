import Hero from '@/components/sections/Hero'
import Especialidades from '@/components/sections/Especialidades'
import SobrePedro from '@/components/sections/SobrePedro'
import Testimonios from '@/components/sections/Testimonios'
import Precios from '@/components/sections/Precios'
import FAQ from '@/components/sections/FAQ'
import Contacto from '@/components/sections/Contacto'
import CtaBanner from '@/components/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Especialidades />
      <CtaBanner text="¿Tienes una lesión que no mejora? Primera consulta con diagnóstico completo." />
      <SobrePedro />
      <Testimonios />
      <Precios />
      <CtaBanner text="Sin esperas ni protocolos genéricos. Pide tu cita y empieza a recuperarte." />
      <FAQ />
      <Contacto />
    </>
  )
}
