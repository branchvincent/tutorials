package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// reloadCmd represents the reload command
var reloadCmd = &cobra.Command{
	Use:   "reload",
	Short: "Reload .envrc",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("reload called")
	},
}

func init() {
	rootCmd.AddCommand(reloadCmd)
}
