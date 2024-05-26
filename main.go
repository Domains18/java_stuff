package main

import (
	"github.com/Domains18/clientele/database"
	"github.com/gin-gonic/gin"
)

func init () {
	database.ConnectDatabase()
}

func main (){

	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	r.GET("/",  func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{"message": "welcome to the api"})
	})

}