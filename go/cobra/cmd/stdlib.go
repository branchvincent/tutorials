package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// stdlibCmd represents the stdlib command
var stdlibCmd = &cobra.Command{
	Use:   "stdlib",
	Short: "Print the stdlib",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("<stdlib>")
	},
}

func init() {
	rootCmd.AddCommand(stdlibCmd)
}
