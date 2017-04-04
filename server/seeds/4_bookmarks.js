/* eslint-disable camelcase, no-console */

exports.seed = (knex) => {
  return knex('bookmarks').del()
    .then(() => {
      return knex('bookmarks').insert([{
        id: 1,
        list_id: 1,
        title: 'methodology',
        url: 'https://utexas.edu',
        url_hostname: 'https://utexas.edu',
        img_url: 'http://dummyimage.com/180x180.png/cc0000/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        list_id: 2,
        title: 'hybrid',
        url: 'http://adobe.com',
        url_hostname: 'http://adobe.com',
        img_url: 'http://dummyimage.com/180x180.jpg/5fa2dd/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        list_id: 3,
        title: 'Horizontal',
        url: 'http://smugmug.com',
        url_hostname: 'http://smugmug.com',
        img_url: 'http://dummyimage.com/180x180.jpg/dddddd/000000',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        list_id: 4,
        title: 'Implemented',
        url: 'https://storify.com',
        url_hostname: 'https://storify.com',
        img_url: 'http://dummyimage.com/180x180.bmp/5fa2dd/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 5,
        list_id: 5,
        title: 'modular',
        url: 'http://usda.gov',
        url_hostname: 'http://usda.gov',
        img_url: 'http://dummyimage.com/180x180.png/dddddd/000000',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 6,
        list_id: 6,
        title: 'portal',
        url: 'https://amazonaws.com',
        url_hostname: 'https://amazonaws.com',
        img_url: 'http://dummyimage.com/180x180.png/cc0000/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 7,
        list_id: 7,
        title: 'Synchronised',
        url: 'http://sciencedirect.com',
        url_hostname: 'http://sciencedirect.com',
        img_url: 'http://dummyimage.com/180x180.bmp/cc0000/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 8,
        list_id: 1,
        title: 'zero tolerance',
        url: 'http://statcounter.com',
        url_hostname: 'http://statcounter.com',
        img_url: 'http://dummyimage.com/180x180.bmp/dddddd/000000',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 9,
        list_id: 2,
        title: 'Fundamental',
        url: 'https://parallels.com',
        url_hostname: 'https://parallels.com',
        img_url: 'http://dummyimage.com/180x180.png/cc0000/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 10,
        list_id: 3,
        title: 'hardware',
        url: 'http://yolasite.com',
        url_hostname: 'http://yolasite.com',
        img_url: 'http://dummyimage.com/180x180.jpg/cc0000/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 11,
        list_id: 4,
        title: 'collaboration',
        url: 'https://blinklist.com',
        url_hostname: 'https://blinklist.com',
        img_url: 'http://dummyimage.com/180x180.png/5fa2dd/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 12,
        list_id: 5,
        title: 'paradigm',
        url: 'http://mysql.com',
        url_hostname: 'http://mysql.com',
        img_url: 'http://dummyimage.com/180x180.bmp/5fa2dd/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 13,
        list_id: 6,
        title: 'Enterprise-wide',
        url: 'https://mayoclinic.com',
        url_hostname: 'https://mayoclinic.com',
        img_url: 'http://dummyimage.com/180x180.bmp/ff4444/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 14,
        list_id: 7,
        title: 'project',
        url: 'https://yale.edu',
        url_hostname: 'https://yale.edu',
        img_url: 'http://dummyimage.com/180x180.bmp/ff4444/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('bookmarks_id_seq', (SELECT MAX(id) FROM bookmarks));"
      );
    })
    .catch((err) => {
      console.error(err);
    });
};
