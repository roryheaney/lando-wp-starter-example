# Example Repo for Lando WordPress Environment

- Themes are Sage or Full Site editing
  - Sage is a hybrid theme
  - Complete code as a companion for [this](https://paultruong.dev/blog/create-a-local-wordpress-environment-with-lando/) blog post.

# .lando.yml

- Branched off Master
- This will never be merged in, but if there is an update needed in the base config, then it will take place in Main and get merged into this branch.

## How to run

- `lando start`
- `lando rebuild` - if you update the configuration
- `lando destroy` - only if you want to get rid of everything and start over
