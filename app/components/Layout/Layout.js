/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import s from './Layout.css';
import { Layout as MDLLayout, Header, Drawer, Navigation, Content } from 'react-mdl';
import FilterQuery from '../../containers/FilterQuery';
import Link from '../Link';
import './styles.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <MDLLayout fixedHeader fixedDrawer>
        <Header title="Home">
          <FilterQuery />
        </Header>
        <Drawer title="Navigation">
          <Navigation>
            <Link className="mdl-navigation__link" to="/">Home</Link>
            <Link className="mdl-navigation__link" to="/about">About</Link>
          </Navigation>
        </Drawer>
        <Content>
          {this.props.children}
        </Content>
      </MDLLayout>
    );
  }
}

export default Layout;
