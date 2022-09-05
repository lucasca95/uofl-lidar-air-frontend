// base imports
import { useEffect, useState, useContext, createContext } from 'react';
// import useStore, {Context} from './common/ContextBase';
import { CircularProgress } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Theme from './theme/theme';

// import pages
import MainDashboardP from './components/pages/MainDashboardP';
import { useStore } from './common/Context';


function App() {
  const [load, setLoad] = useState(false);

  useEffect(()=>{
    setLoad(true);
  },[]);

  return (load) 
  ?
    (
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<MainDashboardP />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    )
  :
    (<CircularProgress color="inherit" />);
}

export default App;