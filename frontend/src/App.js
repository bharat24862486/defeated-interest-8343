import logo from './logo.svg';
import './App.css';
import MainRoutes from './routes/MainRoutes';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import MobNav3 from './component/Navbar/MobNav3';
import Nav from './component/Navbar/Nav';
import Nev2 from './component/Navbar/Nev2';

function App() {

  const [check, setCheck] = useState(false)
function makeTrue(){
  console.log("true")
  setCheck(true)
}
function makeFalse(){
  console.log("false")
  setCheck(false)
}
  return (
    <Box>
      {/* {check ? <MobNav3 makeFalse={makeFalse}/> :
        <Box><Nav makeTrue={makeTrue} />
        <Nev2 /></Box>} */}
      <MainRoutes/>
    </Box>
  );
}

export default App;
