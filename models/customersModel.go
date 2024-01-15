package models

import (
	"gorm.io/gorm"
	"math/big"
)

type Customer struct {
	gorm.Model
	id big.Int
	email string `gorm:"unique"`
	phone big.Int `gorm:"unique"`
	password string `gorm:"required"`
}
