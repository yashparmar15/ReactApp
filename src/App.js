import React , {Component} from 'react';

import Aux from './hoc/Aux';

import AppBuilder from './containers/AppBuilder/AppBuilder';

class App extends Component{
    render(){
      return(
        <Aux>
            <AppBuilder />
        </Aux>
      );
    }
}

export default App;
