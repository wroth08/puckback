exports.up = function(knex, Promise) {
    return knex.schema.createTable('teams', (table) => {
        table.integer('id');
        table.text('name');
        table.text('favorited');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('teams');
  };