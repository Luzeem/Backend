var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
});

module.exports.connectdb = function () {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS Finstagram;", function (err, result) {
      if (err) return console.log("Database error", err);
      console.log("Database created");

      con.query(
        "CREATE TABLE IF NOT EXISTS `Finstagram`.`User` (`id` int NOT NULL, `name` varchar(40) NOT NULL, `surname` varchar(40) NOT NULL, `photo` varchar(400) NOT NULL, `email` varchar(70) NOT NULL, PRIMARY KEY (`id`));",
        function (err, result) {
          if (err) return console.log("User table error", err);
          console.log("User table created");
          con.query(
            "CREATE TABLE IF NOT EXISTS `Finstagram`.`Photo` (`id` int NOT NULL, `url` varchar(400) NOT NULL, `User_id` int NOT NULL, PRIMARY KEY (`id`), INDEX `fk_Photo_User_idx` (`User_id` ASC) VISIBLE,CONSTRAINT `fk_Photo_User`FOREIGN KEY (`User_id`)REFERENCES `Finstagram`.`User` (`id`));",
            function (err, result) {
              if (err) return console.log("Photo table error", err);
              console.log("Photo table created");
              con.query(
                "CREATE TABLE IF NOT EXISTS `Finstagram`.`Like` (`id` int NOT NULL, `Photo_id` int NOT NULL, PRIMARY KEY (`id`),INDEX `fk_Like_Photo1_idx` (`Photo_id` ASC) VISIBLE, CONSTRAINT `fk_Like_Photo1` FOREIGN KEY (`Photo_id`)REFERENCES `Finstagram`.`Photo` (`id`));",
                function (err, result) {
                  if (err) return console.log("Like table error", err);
                  console.log("Like table created");
                  con.query(
                    "CREATE TABLE IF NOT EXISTS `Finstagram`.`Comment` (`id` int NOT NULL, `text`  varchar(400) NOT NULL, `created_at` date NOT NULL,`Photo_id` int NOT NULL, PRIMARY KEY (`id`), INDEX `fk_Comment_Photo1_idx` (`Photo_id` ASC) VISIBLE, CONSTRAINT `fk_Comment_Photo1` FOREIGN KEY (`Photo_id`) REFERENCES `Finstagram`.`Photo` (`id`));",
                    function (err, result) {
                      if (err) return console.log("Comment table error", err);
                      console.log("Comment table created");
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  })
};
