const cheerio = require('cheerio');
const url = require('url');

const parseBookmark = (data, bookmarkUrl, listId) => {
  const $ = cheerio.load(data);
  const bookmark = {};

  // Add foreign key
  bookmark.listId = listId;

  // Get bookmark title
  if ($('meta[property="og:title"]').attr('content')) {
    bookmark.title = $('meta[property="og:title"]').attr('content');
  }
  else if ($('title').text()) {
    bookmark.title = $('title').text();
  }
  else {
    bookmark.title = url.parse(bookmarkUrl, true, true).hostname;
  };

  // Get bookmark url hostname for display
  bookmark.urlHostname = url.parse(bookmarkUrl, true, true).hostname;

  // Get bookmark url
  if ($('meta[property="og:url"]').attr('content')) {
    bookmark.url = $('meta[property="og:url"]').attr('content');
  }
  else {
    bookmark.url = bookmarkUrl;
  }

  // Get image if available
  if ($('meta[property="og:image"]').attr('content')) {
    bookmark.imgUrl = $('meta[property="og:image"]').attr('content');
  }

  return bookmark;
};

module.exports = parseBookmark;
