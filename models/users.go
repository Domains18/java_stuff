package models



var User struct{
	username string
	email string
	password string
	phoneNumber string
}


var Message struct {
	message string
	userId string
}


var  Developers struct {
	username string
	email string 
	password string 
	work []string
}