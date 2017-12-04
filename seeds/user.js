exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {name: "Weston",
        password: "Awesome4",
        email: "weston@gmail.com"
        }
      ]);
    });
};
