package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// hookCmd represents the hook command
var hookCmd = &cobra.Command{
	Use:   "hook",
	Short: "Print the shell hook",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("hook called")
	},
}

func init() {
	rootCmd.AddCommand(hookCmd)
}
