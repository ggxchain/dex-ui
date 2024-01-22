{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-23.11"; # We want to use packages from the binary cache
    flake-utils.url = "github:numtide/flake-utils";
    
  };

  outputs = inputs@{ self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem 
      (system:
        let
          pkgs  = import nixpkgs {
            inherit system;
          };

        in rec {
          devShells = {
            default = pkgs.mkShell {
                nativeBuildInputs = with pkgs; [
                  nodejs-18_x
                ];

                buildInputs = [];
            };
          };
        }
      );
} 
