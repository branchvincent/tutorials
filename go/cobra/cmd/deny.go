package cmd

import (
	"fmt"

	"github.com/branchvincent/tutorials/go/cobra/internal"
	"github.com/spf13/cobra"
)

// denyCmd represents the deny command
var denyCmd = &cobra.Command{
	Use:   "deny [.envrc]",
	Short: "Deny loading the given .envrc",
	Args:  cobra.MaximumNArgs(1),
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

		fmt.Printf("Denied %s", rcPath)
		return nil
	},
}

func init() {
	rootCmd.AddCommand(denyCmd)
}
