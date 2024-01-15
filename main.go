package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/szken/AuthMicroservice/configurations"
	"net/http"
	"os"
)

func init() {
	gin.SetMode(gin.ReleaseMode)
	configurations.RequireConfigs()

}

func main() {
	server := gin.Default()
	server.GET("/api", func(context *gin.Context) {
		switch context.GetHeader("Accept") {
		case "text/html":
			context.File("public/api.html")
		case "application/json":
			context.JSON(http.StatusOK, gin.H{"success": "successfully accessed the api"})
		default:
			context.String(http.StatusNotAcceptable, "unrecognized method")
		}
	})
	err := server.Run()
	if err != nil {
		panic(err)
	}
	fmt.Println("server running on port"+os.Getenv("PORT"))
		
}
