package cmd

import (
	"fmt"

	"github.com/branchvincent/tutorials/go/cobra/internal"
	"github.com/spf13/cobra"
)

// allowCmd represents the allow command
var allowCmd = &cobra.Command{
	Use:   "allow [.envrc]",
	Short: "Allow loading the given .envrc",
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

		fmt.Printf("Allowed %s", rcPath)
		return nil
	},
}

func init() {
	rootCmd.AddCommand(allowCmd)
}
