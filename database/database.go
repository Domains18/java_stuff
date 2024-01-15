package database

import (
	"fmt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"os"
)

var DB *gorm.DB

func PingDatabase(){
	var isError error
	dsn := os.Getenv("DATABASE_STRING")
	DB, isError = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if isError != nil {
		log.Fatalf("Error connecting to database: %s", isError)
	}
	fmt.Println("Database connected: ")
}