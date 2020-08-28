module.exports = {
  up: `
          CREATE TABLE points(
            id VARCHAR(36) PRIMARY KEY NOT NULL,  
            user_id VARCHAR(36) NOT NULL,
            point INT DEFAULT 0,
            created_at TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
      `,
  down: "DROP TABLE points",
};
