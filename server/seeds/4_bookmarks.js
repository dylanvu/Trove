/* eslint-disable camelcase, no-console */

exports.seed = (knex) => {
  return knex('bookmarks').del()
    .then(() => {
      return knex('bookmarks').insert([{
        id: 1,
        list_id: 1,
        title: '',
        url: 'https://facebook.github.io/react/docs/optimizing-performance.html',
        url_hostname: 'facebook.github.io',
        img_url: 'https://facebook.github.io/react/img/logo_og.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        list_id: 2,
        title: 'hybrid',
        url: 'http://adobe.com',
        url_hostname: 'http://adobe.com',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        list_id: 3,
        title: 'Horizontal',
        url: 'http://smugmug.com',
        url_hostname: 'http://smugmug.com',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 4,
        list_id: 4,
        title: 'goPoke',
        url: 'https://www.yelp.com/biz/gopok%C3%A9-seattle-5',
        url_hostname: 'www.yelp.com',
        img_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/KNApvM96tLM7TPqQhOLQrA/o.jpg',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 5,
        list_id: 5,
        title: 'modular',
        url: 'http://usda.gov',
        url_hostname: 'http://usda.gov',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 6,
        list_id: 6,
        title: 'portal',
        url: 'https://amazonaws.com',
        url_hostname: 'https://amazonaws.com',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 7,
        list_id: 7,
        title: 'Synchronised',
        url: 'http://sciencedirect.com',
        url_hostname: 'http://sciencedirect.com',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 8,
        list_id: 1,
        title: 'Redux',
        url: 'http://redux.js.org/',
        url_hostname: 'redux.js.org',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 9,
        list_id: 2,
        title: 'Fundamental',
        url: 'https://parallels.com',
        url_hostname: 'https://parallels.com',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 10,
        list_id: 3,
        title: 'hardware',
        url: 'http://yolasite.com',
        url_hostname: 'http://yolasite.com',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 11,
        list_id: 4,
        title: 'collaboration',
        url: 'https://blinklist.com',
        url_hostname: 'https://blinklist.com',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 12,
        list_id: 5,
        title: 'paradigm',
        url: 'http://mysql.com',
        url_hostname: 'http://mysql.com',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 13,
        list_id: 6,
        title: 'Enterprise-wide',
        url: 'https://mayoclinic.com',
        url_hostname: 'https://mayoclinic.com',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 14,
        list_id: 7,
        title: 'project',
        url: 'https://yale.edu',
        url_hostname: 'https://yale.edu',
        img_url: 'https://cdn4.iconfinder.com/data/icons/adiante-apps-app-templates-incos-in-grey/512/app_type_newspaper_512px_GREY.png',
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
