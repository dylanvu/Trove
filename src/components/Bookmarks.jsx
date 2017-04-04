import React from 'react';
import { connect } from 'react-redux';
import { Card, Image } from 'semantic-ui-react';

const Bookmarks = ({ bookmarks, selectedList }) => (
  <div>
    <h1>{selectedList}</h1>
    <Card.Group>
      { bookmarks.map((bookmark) => (
        <Card
          as='a'
          href={bookmark.url}
          key={bookmark.id}
          target='_blank'
        >
          <Image src={bookmark.imgUrl} fluid/>
          <Card.Content>
            <Card.Header>
              {bookmark.title}
            </Card.Header>
            <Card.Meta>{bookmark.url}</Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);

Bookmarks.propTypes = {
  bookmarks: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  selectedList: state.selectedList.name,
  bookmarks: state.bookmarks.data
});

export default connect(mapStateToProps)(Bookmarks);
