import React, {Component} from 'react';



import User_map from '../components/User_map';

export default class Routes extends Component<{}>{
  render(){
      return (
          <Router>
              <Stack key="root">
                  <Scene key="login" component={Login} title="Login" />
                  <Scene key="mapa" component={User_map} title="Mapa" />
              </Stack>
        </Router>
      )
  }

}
