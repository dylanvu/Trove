/* eslint-disable camelcase, no-console */
'use strict';

exports.seed = (knex) => {
  return knex('bookmarks').del()
    .then(() => {
      return knex('bookmarks').insert([{
        id: 1,
        list_id: 1,
        title: 'methodology',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'https://utexas.edu',
        img_url: 'http://dummyimage.com/180x180.png/cc0000/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        list_id: 2,
        title: 'hybrid',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'http://adobe.com',
        img_url: 'http://dummyimage.com/180x180.jpg/5fa2dd/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        list_id: 3,
        title: 'Horizontal',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'http://smugmug.com',
        img_url: 'http://dummyimage.com/180x180.jpg/dddddd/000000',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        list_id: 4,
        title: 'Implemented',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'https://storify.com',
        img_url: 'http://dummyimage.com/180x180.bmp/5fa2dd/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 5,
        list_id: 5,
        title: 'modular',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'http://usda.gov',
        img_url: 'http://dummyimage.com/180x180.png/dddddd/000000',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 6,
        list_id: 6,
        title: 'portal',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'https://amazonaws.com',
        img_url: 'http://dummyimage.com/180x180.png/cc0000/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 7,
        list_id: 7,
        title: 'Synchronised',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'http://sciencedirect.com',
        img_url: 'http://dummyimage.com/180x180.bmp/cc0000/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 8,
        list_id: 1,
        title: 'zero tolerance',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'http://statcounter.com',
        img_url: 'http://dummyimage.com/180x180.bmp/dddddd/000000',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 9,
        list_id: 2,
        title: 'Fundamental',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'https://parallels.com',
        img_url: 'http://dummyimage.com/180x180.png/cc0000/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 10,
        list_id: 3,
        title: 'hardware',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'http://yolasite.com',
        img_url: 'http://dummyimage.com/180x180.jpg/cc0000/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 11,
        list_id: 4,
        title: 'collaboration',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'https://blinklist.com',
        img_url: 'http://dummyimage.com/180x180.png/5fa2dd/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 12,
        list_id: 5,
        title: 'paradigm',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'http://mysql.com',
        img_url: 'http://dummyimage.com/180x180.bmp/5fa2dd/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 13,
        list_id: 6,
        title: 'Enterprise-wide',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'https://mayoclinic.com',
        img_url: 'http://dummyimage.com/180x180.bmp/ff4444/ffffff',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 14,
        list_id: 7,
        title: 'project',
        desc: 'Migas street art poutine, man braid forage farm-to-table salvia woke ',
        url: 'https://yale.edu',
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
