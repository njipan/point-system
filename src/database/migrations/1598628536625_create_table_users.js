module.exports = {
  up: `
        CREATE TABLE users(
            id VARCHAR(36) PRIMARY KEY NOT NULL,
            username VARCHAR(255) NOT NULL,
            point INT DEFAULT 0,
            created_at TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `,
  down: "DROP TABLE users",
};
