
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments("id").primary();
        table.string('email').notNullable();
        table.string('password');

    }
    )
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
  
};
