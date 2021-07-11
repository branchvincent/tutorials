package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// fetchurlCmd represents the fetchurl command
var fetchurlCmd = &cobra.Command{
	Use:   "fetchurl",
	Short: "Fetch and cache the URL",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("fetchurl called")
	},
}

func init() {
	rootCmd.AddCommand(fetchurlCmd)
}
