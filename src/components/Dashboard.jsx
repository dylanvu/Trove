import React from 'react';
import { Grid } from 'semantic-ui-react';
import Lists from './Lists';
import Bookmarks from './Bookmarks';

const Dashboard = () => {
  return (
  <Grid.Row>
    <Grid.Column
      computer={3}
      tablet={6}
      mobile={16}
    >
      <Lists/>
    </Grid.Column>
    <Grid.Column
      computer={13}
      tablet={10}
      mobile={16}

    >
      <Bookmarks/>
    </Grid.Column>
  </Grid.Row>
)};

export default Dashboard;
