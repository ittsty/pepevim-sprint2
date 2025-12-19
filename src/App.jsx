import { AboutUs } from "./components/aboutUs";
import { Contact } from "./components/contact";
import Particles from './Particles';

function App() {
  return (
    <main className='relative w-full min-h-screen  '>

      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="h-screen flex items-center justify-center">
        <AboutUs />
      </div>

      <div>
        <Contact/>
      </div>

    </main>
  )
}

export default App;

