import React from 'react';
import { Grid } from 'semantic-ui-react';
import Lists from './Lists';
import Bookmarks from './Bookmarks';

const Dashboard = () => {
  return (
  <Grid.Row>
    <Grid.Column
      computer={2}
      tablet={3}
      mobile={16}
    >
      <Lists/>
    </Grid.Column>
    <Grid.Column
      computer={14}
      tablet={13}
      mobile={16}

    >
      <Bookmarks/>
    </Grid.Column>
  </Grid.Row>
)};

export default Dashboard;
