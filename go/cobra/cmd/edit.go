package cmd

import (
	"fmt"

	"github.com/branchvincent/tutorials/go/cobra/internal"
	"github.com/spf13/cobra"
)

// editCmd represents the edit command
var editCmd = &cobra.Command{
	Use:   "edit",
	Short: "Edit and load the given .envrc",
	RunE: func(cmd *cobra.Command, args []string) error {
		var rcPath string
		if len(args) == 1 {
			rcPath = args[0]
		} else {
			rcPath = internal.RCDefault()
		}

		if err := internal.RCValidate(rcPath); err != nil {
			return err
		}

		fmt.Printf("Edited %s", rcPath)
		return nil
	},
}

func init() {
	rootCmd.AddCommand(editCmd)
}
