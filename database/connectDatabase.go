package database

import (
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)


var Database * gorm.DB

func ConnectDatabase()(string *gorm.DB){
	var err error
	dsn := os.Getenv("DATABASE_URL")
	ping, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("failed to connect to database")
	}
	return ping
}