import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import AddList from './AddList';
import { fetchLists } from '../../actions/lists';
import { fetchBmFromList } from '../../actions/selectList';

class Lists extends React.Component {
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.fetchBmFromList(this.props.defaultList)
    }
  }

  render() {
    const {
      defaultList,
      privateLists,
      sharedLists,
      fetchBmFromList,
      selectedList
    } = this.props;
    return (
      <div>
        <h1>Lists</h1>
        <AddList/>
        <Menu vertical secondary size='massive'>
          <Menu.Item>
            <Menu.Header>Private</Menu.Header>
            <Menu.Menu>
              <Menu.Item
                active={selectedList === defaultList}
                onClick={() => fetchBmFromList(defaultList)}
              >
                {defaultList.name}
              </Menu.Item>
            </Menu.Menu>
            <Menu.Menu>
              { privateLists.map((list) => {
                return (
                  <Menu.Item
                    key={list.id}
                    active={selectedList === list}
                    onClick={() => fetchBmFromList(list)}
                  >
                    {list.name}
                  </Menu.Item>
                )
              })}
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Shared</Menu.Header>
            <Menu.Menu>
              { sharedLists.map((list) => {
                return (
                  <Menu.Item
                    key={list.id}
                    active={selectedList === list}
                    onClick={() => fetchBmFromList(list)}
                  >
                    {list.name}
                  </Menu.Item>
                )
              })}
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

Lists.propTypes = {
  defaultList: React.PropTypes.object.isRequired,
  privateLists: React.PropTypes.array.isRequired,
  sharedLists: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  authenticated: React.PropTypes.bool,
  fetchLists: React.PropTypes.func.isRequired,
  fetchBmFromList: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  selectedList: state.selectedList,
  ...state.lists
})

export default connect(
  mapStateToProps,
  { fetchLists, fetchBmFromList }
)(Lists);
