import React from 'react';
import { connect } from 'react-redux';
import fetchLists from '../actions/getLists';

class Lists extends React.Component {
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.fetchLists();
    }
  };

  render() {
    const { defaultList, privateLists, sharedLists, isFetching } = this.props;
    return (
      <div>
        <h1>My List</h1>
        <p>{ isFetching ? 'loading...' : 'done!' }</p>
        <ul>
          <li>{ defaultList.name }</li>
          <hr/>
          { privateLists.map((list) => {
            return (
              <li key={list.id}>
                {list.name}
              </li>
            )
          })}
          <hr/>
          { sharedLists.map((list) => {
            return (
              <li key={list.id}>
                {list.name}
              </li>
            )
          })}
        </ul>
      </div>
    );
  };
}

Lists.propTypes = {
  defaultList: React.PropTypes.object,
  privateLists: React.PropTypes.array,
  sharedLists: React.PropTypes.array,
  isFetching: React.PropTypes.bool
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  ...state.lists
})

export default connect(
  mapStateToProps,
  { fetchLists }
)(Lists);
