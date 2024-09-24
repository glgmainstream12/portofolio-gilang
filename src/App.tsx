import{BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/landing-pages';
import LandingPage1 from './pages/portofolio-pages-1/index1';
import CekKhodam from './pages/portofolio-pages-2/index2';
import './App.css';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <LandingPage />
//     </div>
//   );
// };

// export default App;

function App(){
  return (
    <BrowserRouter>
     <Routes>
      <Route>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<LandingPage1/>} path='/portofolio-1'/>
        <Route element={<CekKhodam/>} path='/portofolio-2'/>
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
