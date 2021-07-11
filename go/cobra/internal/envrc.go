package internal

import (
	"os"
	"path/filepath"
)

// RCValidate finds and validates that path is readable
func RCValidate(path string) error {
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return err
	}
	return nil
}

// RCDefault returns the default path
func RCDefault() string {
	return filepath.Join(os.Getenv("PWD"), ".envrc")
}
