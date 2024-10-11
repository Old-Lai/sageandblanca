const client = require("../client");

const medias = {
  create: async ({ url, name }) => {
    try {
      console.log("creating media......");
      const result = await client.query(
        `
        INSERT INTO medias (url, name)
        VALUES ($1, $2)
        RETURNING *;
      `,
        [url, name]
      );
      return result.rows;
    } catch (error) {
      console.log("error creating media!!!!!!\n", error);
    }
  },
  get: {
    all: async () => {
      try {
        const result = await client.query(`
          SELECT * FROM medias;
        `);
        return result.rows;
      } catch (error) {
        console.error("Error getting all medias!!!", error);
      }
    },
    __byInternalId: async ({ internal_id }) => {
      try {
        const {
          rows: [media],
        } = await client.query(`
          SELECT * FROM medias 
          WHERE internal_id = $1;
        `,[internal_id]);
        return media;
      } catch (error) {
        console.error("Error getting media by internal id!!!", error);
      }
    },
  },
  status: {
    deactivate: {
      __byInternalId: async ({ internal_id }) => {
        try {
          const {
            rows: [media],
          } = await client.query(`
          UPDATE medias
          SET is_active = FALSE
          WHERE internal_id = $1;

        `);
          return media;
        } catch (error) {
          console.error("Error getting media by internal id!!!", error);
        }
      },
    },
    activate:{
      __byInternalId: async ({ internal_id }) => {
        try {
          const {
            rows: [media],
          } = await client.query(`
          UPDATE medias
          SET is_active = TRUE
          WHERE internal_id = $1;

        `);
          return media;
        } catch (error) {
          console.error("Error getting media by internal id!!!", error);
        }
      },
    },
  },
};

module.exports = medias;
