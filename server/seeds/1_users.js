/* eslint-disable camelcase, no-console */

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'Dylan',
        last_name: 'Vu',
        email: 'dylan@gmail.com',
        hashed_password: '$2a$12$LgAfRsujSUcgFz/ksxq.ruinhU4jHJXDhH3Xa3tof0UBc./QVEg7K',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        first_name: 'Roshella',
        last_name: 'Gonzales',
        email: 'roshella@gmail.com',
        hashed_password: '$2a$12$LgAfRsujSUcgFz/ksxq.ruinhU4jHJXDhH3Xa3tof0UBc./QVEg7K',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 3,
        first_name: 'Danny',
        last_name: 'Vu',
        email: 'danny@gmail.com',
        hashed_password: '$2a$12$LgAfRsujSUcgFz/ksxq.ruinhU4jHJXDhH3Xa3tof0UBc./QVEg7K',
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    })
    .catch((err) => {
      console.error(err);
    });
};
