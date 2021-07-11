package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// pruneCmd represents the prune command
var pruneCmd = &cobra.Command{
	Use:   "prune",
	Short: "Remove old allowed files",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("prune called")
	},
}

func init() {
	rootCmd.AddCommand(pruneCmd)
}
