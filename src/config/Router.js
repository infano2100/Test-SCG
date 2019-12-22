import React from 'react'
import { 
  Router,
  Stack,
  Scene,
  Tabs,
} from 'react-native-router-flux'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'

import { Test } from '../features/Test'
import { Map } from '../features/Map'


const homeIcon = ({focused}) =>  <IconMaterial name={focused ? "home" : "home-outline" } size={25} />
const mapIcon = ({focused}) =>  <IconMaterial name={focused ? "map" : "map-outline" } size={25} />

const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Stack key="app" hideNavBar panHandlers={null} >
        <Tabs showLabel={false}>
          <Scene key="Home" component={Test} icon={homeIcon} title="Test"  initial />
          <Scene key="Map" component={Map} icon={mapIcon} title="Map" />
        </Tabs>
      </Stack>
    </Stack>
  </Router>
)

export default RouterComponent
