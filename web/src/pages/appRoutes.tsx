import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Orders from './Orders'

export default function _Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/orders' component={Orders} />
    </Switch>
  )
}
