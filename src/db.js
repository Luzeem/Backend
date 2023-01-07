var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password"

})

module.exports.connectdb= function() {

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE Finstagram;", function (err, result) {
    if (err) return console.log("Database already exists");
    console.log("Database created");

    con.query("CREATE TABLE IF NOT EXISTS `mydb`.`User` (`id`  NOT NULL, `name ` NOT NULL, `surname`  NOT NULL, `photo`  NOT NULL, `email` NOT NULL, PRIMARY KEY (`id`));", function (err, result) {
      console.log("User table created");
      con.query("CREATE TABLE IF NOT EXISTS `mydb`.`Photo` (`id`  NOT NULL, `url`  NOT NULL, `User_id`  NOT NULL, PRIMARY KEY (`id`), INDEX `fk_Photo_User_idx` (`User_id` ASC) VISIBLE,CONSTRAINT `fk_Photo_User`FOREIGN KEY (`User_id`)REFERENCES `mydb`.`User` (`id`));", function (err, result) {
        console.log("User table created");
        con.query("CREATE TABLE IF NOT EXISTS `mydb`.`Like` (`id`  NOT NULL, `Photo_id`  NOT NULL, PRIMARY KEY (`id`),INDEX `fk_Like_Photo1_idx` (`Photo_id` ASC) VISIBLE, CONSTRAINT `fk_Like_Photo1` FOREIGN KEY (`Photo_id`)REFERENCES `mydb`.`Photo` (`id`));", function (err, result) {
          console.log("User table created");
          con.query("CREATE TABLE IF NOT EXISTS `mydb`.`Comment` (`id`  NOT NULL, `text` NOT NULL, `created_at`  NOT NULL,`Photo_id`  NOT NULL, PRIMARY KEY (`id`), INDEX `fk_Comment_Photo1_idx` (`Photo_id` ASC) VISIBLE, CONSTRAINT `fk_Comment_Photo1` FOREIGN KEY (`Photo_id`) REFERENCES `mydb`.`Photo` (`id`));", function (err, result) {
            console.log("User table created"); 
      })
    })
});
});
});
});
}