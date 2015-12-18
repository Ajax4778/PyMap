# PyMap
Experiments with the Google Maps API

This repository contains a Google Maps browser application built primarily
with React. For a command-line interface, a simple Python 'shell' using the
`geocoder` package is provided. Additionally, a Python server allows the use of
geolocation from localhost.

### Requirements
* Node Package Manager: `npm`
* Python 3

### Setup
* Clone this repository.
* Run `npm install` from the repository's root folder. This will set up all the
necessary Javascript dependencies via `package.json`.
* Run `webpack` from within the repository's root folder. This will bundle the
various Javascript files into `javascripts/bundle.js`. Note that this bundle
file is not included in the git repository and must be created.
* Finally, run `python3 -m http.server` to start the server.

### Usage
* The browser interface can be accessed at `localhost:8000/index.html`
once the server is running, assuming use of the default port.
* The command-line interface can be accessed by running
`python3 geocode_shell.py` from the repository's root folder.

### Notes
* The server is strictly necessary only for Chrome users, since Chrome
restricts geolocation from local files.
* For non-Chrome users, the browser interface can be accessed by simply opening
`index.html`. However, the command-line interface requires the server to be
running.
