const conn = require("./../../database");

const all = () => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM users", function (error, rows, fields) {
      if (error) reject(error);

      resolve(rows);
    });
  });
};

const get = (id) => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM users WHERE id='${id}'`, function (error, rows) {
      if (error) reject(error);

      resolve(rows[0]);
    });
  });
};

const create = ({ username }) => {
  return new Promise((resolve, reject) => {
    conn.query(
      `
        INSERT INTO users (id,username,created_at)
        VALUES(UUID(), '${username}',CURRENT_TIMESTAMP)
    `,
      function (error, rows) {
        if (error) reject(error);

        resolve(rows[0] || {});
      }
    );
  });
};

const updatePoint = ({ id = null, point = 0 }) => {
  return new Promise((resolve, reject) => {
    conn.beginTransaction((err) => {
      conn.query(
        `INSERT INTO points (id,user_id,point,created_at) VALUES(UUID(), '${id}',${point},CURRENT_TIMESTAMP)`,
        function (error, rows) {
          if (error) {
            conn.rollback();
            return reject(error);
          }

          conn.query(
            `UPDATE users SET point= point + ${point} WHERE id='${id}'`,
            function (error, rows) {
              if (error) {
                conn.rollback();
                return reject(error);
              }
              conn.commit();
              resolve(rows);
            }
          );
        }
      );
    });
  });
};

module.exports = {
  all,
  get,
  create,
  updatePoint,
};
