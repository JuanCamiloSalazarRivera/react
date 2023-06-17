import './App.css'
import ProjectsPage from './projects/ProjectsPage';
import ProjectsPage2 from './projects/ProjectsPage2';

const App = () =>
    <div className="container">
      <ProjectsPage/>
      <ProjectsPage2/>
    </div>;
  //  const [count, setCount] = useState(0)

  //  return (
  //    <div className="App">
  //      <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //        <img src="/vite.svg" className="logo" alt="Vite logo" />
  //        </a>
  //     <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //        </a>
  //     </div>
  //     <h1>Mi primera pagina react</h1>
  //      <div className="card">
  //        <button onClick={() => setCount((count) => count + 1)}>
  //        count is {count}
  //     </button>
  //    <p>
  //       Edit <code>src/App.jsx</code> and save to test HMR
  //        </p>
  //     </div>
  //   <p className="read-the-docs">
  //        Click on the Vite and React logos to learn more
  //      </p>
  //     </div>
  //  )


export default App;
