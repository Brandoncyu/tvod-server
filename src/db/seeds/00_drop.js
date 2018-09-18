exports.seed = async knex => {
  await knex('users').del()
  await knex('interests').del()
  await knex('users_interests').del()
  await knex('series').del()
  await knex('episodes').del()
  await knex('users_following').del()
};
