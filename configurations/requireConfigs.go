package configurations

import (
	"github.com/joho/godotenv"
	"log"
)

func RequireConfigs(){
	err := godotenv.Load()
	if err != nil {
		log.Fatalln("Error loading .env file")
	}
}
