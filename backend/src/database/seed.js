const client = require("../client");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    await client.query(`
      DROP TABLE IF EXISTS media_placements;
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS medias;
    `);

    console.log("Finished dropping tables!");
  } catch (e) {
    console.error("Error dropping tables!!!");
    throw e;
  }
}

async function createTables() {
  try {
    console.log("Starting to build tables...");

    await client.query(`
      CREATE TABLE medias(
        internal_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        url VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) UNIQUE NOT NULL
      );

      CREATE TABLE media_placements(
        media_id UUID REFERENCES medias(internal_id) NOT NULL,
        placement VARCHAR(255) NOT NULL,
        index INTEGER UNIQUE NOT NULL,
        id_active BOOLEAN DEFAULT TRUE
      );

      CREATE TABLE products(
        internal_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        default_media_id UUID REFERENCES medias(internal_id),
        name VARCHAR(255) NOT NULL,
        dollar_amt INTEGER NOT NULL DEFAULT 0,
        is_active BOOLEAN DEFAULT TRUE
      );
    `);

    console.log("Finished building tables!");
  } catch (e) {
    console.error("Error building tables!!!");
    throw e;
  }
}

async function seed() {
  try {
    await dropTables();
    await createTables();
    console.log("Database seeded successfully!");
  } catch (e) {
    console.error("Error seeding database!!!");
    throw e;
  } finally {
    client.end();
  }
}

if (require.main === module) {
  seed();
}
