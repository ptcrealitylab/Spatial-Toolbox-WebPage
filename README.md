# ptcrealitylab.github.io

The source of https://spatialtoolbox.vuforia.com/


## Running locally

Clone this repo then run `git submodule update --init --recursive` in it to
download the documentation submodule.

Now run `bundle install` followed by `bundle exec jekyll serve` to start the
server locally. Note that it may be a good idea to update the server host in
`_config.yml` to be http://localhost:4000 so that links keep you on the local
server.
