import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { fetchLists } from '../actions/lists';
import { fetchBmFromList } from '../actions/selectList';

class Lists extends React.Component {
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.fetchLists();
      this.props.fetchBmFromList(this.props.defaultList);
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
      <Menu vertical secondary pointing size='large'>
        <Menu.Item>
          <Menu.Header>My lists</Menu.Header>
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
