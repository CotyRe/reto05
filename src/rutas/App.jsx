import '../assets/css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponenteReto from '../componentes/ComponenteReto.jsx';
import Layout from '../componentes/Layout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<ComponenteReto/>}></Route>
            </Routes>
        </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
