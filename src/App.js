import Home from './Home'
import Resume from './Resume'
import Contact from './Contact'
import Projects from './Projects';
import Navbar from './Navbar'
import Root from './Root';
import Error from './Error';
import './styles/styles.css'
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const x=createBrowserRouter([{
    path:'/',
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/Resume',
        element:<Resume/>,
      },
      {
        path:'/Projects',
        element:<Projects/>,
      },
      {
        path:'/Contact',
        element:<Contact/>,
      }
    ]

  }])
  return (
    
    <div className='App'>

      <RouterProvider router={x}/>
    </div>
  );
}

export default App;
