import React , {Component} from 'react';

import Header from '../../components/header/Header';

import Main from '../../components/Main/Main';

class AppBuilder extends Component{
    render(){
        return(
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default AppBuilder;