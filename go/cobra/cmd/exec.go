package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// execCmd represents the exec command
var execCmd = &cobra.Command{
	Use:   "exec",
	Short: "Load .envrc and executes command",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("exec called")
	},
}

func init() {
	rootCmd.AddCommand(execCmd)
}
