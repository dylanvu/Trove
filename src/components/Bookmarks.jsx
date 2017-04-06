import React from 'react';
import { connect } from 'react-redux';
import { Card, Image } from 'semantic-ui-react';
import { fetchBmFromList } from '../actions/selectList';

class Bookmarks extends React.Component {
  componentWillMount() {
    if (this.props.authenticated) {
      this.props.fetchBmFromList(this.props.selectedList)
    }
  }

  render() {
    const { bookmarks, selectedList } = this.props;
    return (
      <div>
        <h1>{selectedList.name}</h1>
        {/* <div>
          <Label>
            Adrienne
            <Icon name='delete' />
          </Label>
        </div> */}
        <Card.Group>
          { bookmarks.map((bookmark) => (
            <Card
              href={bookmark.url}
              key={bookmark.id}
              target='_blank'
            >
              <Image src={bookmark.imgUrl} fluid/>
              <Card.Content>
                <Card.Header id='truncate'>
                  {bookmark.title}
                </Card.Header>
                <Card.Meta>{bookmark.urlHostname}</Card.Meta>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    );
  }
}

Bookmarks.propTypes = {
  bookmarks: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  selectedList: state.selectedList,
  bookmarks: state.bookmarks.data
});

export default connect(
  mapStateToProps,
  { fetchBmFromList }
)(Bookmarks);
