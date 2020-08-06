import React from 'react';
import Main from "../../pages/Main";
import Hotels from "../../pages/Hotels";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <Router>
       <Switch>
         <Route exact path={"/"}>
             <Main />
         </Route>
           <Route path={"/hotels"}>
               <Hotels/>
           </Route>
       </Switch>
    </Router>
  );
}

export default App;
