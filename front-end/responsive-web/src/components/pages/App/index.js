import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

import SignIn from './../SignIn';
import Register from './../Register';
import Dashboard from './../Dashboard';
import DashboardForConsumer from './../DashboardForConsumer';
import DashboardForConsumerShoppingList from './../DashboardForConsumerShoppingList';
import DashboardForConsumerOrders from './../DashboardForConsumerOrders';
import DashboardForConsumerDonations from './../DashboardForConsumerDonations';
import DashboardForConsumerGroup from './../DashboardForConsumerGroup';
import DashboardForConsumerGroupShoppingList from './../DashboardForConsumerGroupShoppingList';
import DashboardForConsumerGroupOrders from './../DashboardForConsumerGroupOrders';
import DashboardForConsumerGroupTeam from './../DashboardForConsumerGroupTeam';
import DashboardForConsumerGroupDonations from './../DashboardForConsumerGroupDonations';
import DashboardForProvider from './../DashboardForProvider';
import DashboardForProviderInventory from './../DashboardForProviderInventory';
import DashboardForProviderOrders from './../DashboardForProviderOrders';
import DashboardForProviderTeam from './../DashboardForProviderTeam';
import DashboardForProviderDonations from './../DashboardForProviderDonations';
import Marketing from './../Marketing';
import MarketingForProvider from './../MarketingForProvider';
import MarketingForConsumer from './../MarketingForConsumer';
import MarketingForConsumerGroup from './../MarketingForConsumerGroup';

import { Screen } from './../../../design-language/components/layout';

import { GET_USERS_REQUEST } from './../../../redux/reducers/interactions/user-management';

export class App extends Component {
  render() {
    // const { didRequest, getUsers, error } = this.props;

    // <div>
    //   {didRequest ? (
    //     <button disabled>Requesting users...</button>
    //   ) : (
    //     <button onClick={getUsers}>Get users</button>
    //   )}
    //
    //   {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
    // </div>

    return (
      <Screen className="screen">
        <Route exact path='/' component={Marketing} />
        <Route path='/we-can-help-you-sell' component={MarketingForProvider} />
        <Route path='/we-can-help-you-buy' component={MarketingForConsumer} />
        <Route path='/we-can-help-you-buy-for-less' component={MarketingForConsumerGroup} />

        <Route path='/sign-in' component={SignIn} />
        <Route path='/register' component={Register} />

        <Route exact path='/dashboard' component={Dashboard} />

        <Route exact path='/dashboard/consumer' component={DashboardForConsumer} />
        <Route path='/dashboard/consumer/shopping-list' component={DashboardForConsumerShoppingList} />
        <Route path='/dashboard/consumer/orders' component={DashboardForConsumerOrders} />
        <Route path='/dashboard/consumer/donations' component={DashboardForConsumerDonations} />

        <Route exact path='/dashboard/consumer-group' component={DashboardForConsumerGroup} />
        <Route path='/dashboard/consumer-group/shopping-list' component={DashboardForConsumerGroupShoppingList} />
        <Route path='/dashboard/consumer-group/orders' component={DashboardForConsumerGroupOrders} />
        <Route path='/dashboard/consumer-group/team' component={DashboardForConsumerGroupTeam} />
        <Route path='/dashboard/consumer-group/donations' component={DashboardForConsumerGroupDonations} />

        <Route exact path='/dashboard/provider' component={DashboardForProvider} />
        <Route path='/dashboard/provider/inventory' component={DashboardForProviderInventory} />
        <Route path='/dashboard/provider/orders' component={DashboardForProviderOrders} />
        <Route path='/dashboard/provider/team' component={DashboardForProviderTeam} />
        <Route path='/dashboard/provider/donations' component={DashboardForProviderDonations} />
      </Screen>
    );
  }
};

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch({ type: GET_USERS_REQUEST })
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
