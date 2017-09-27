scratchjr-website
=================

[![Greenkeeper badge](https://badges.greenkeeper.io/LLK/scratchjr-website.svg?token=725b7f371ef5a5a54601315ff92d7315bc5d19ff52918847e2eb136efe75b263&ts=1502931528186)](https://greenkeeper.io/)

Code for the Scratch Jr Website

### Before Getting Started
* Make sure you have node (v4.2 or higher) and npm [installed](https://docs.npmjs.com/getting-started/installing-node)

### To Build
```bash
npm install
make build
```

### To Run
```bash
npm start
```

During development, `npm start` watches any update you make to files in either `./static` or `./src` and triggers a rebuild of the project.  In development, the build is stored in memory, and not served from the `./build` directory.

When running `npm start`, here are some important log messages to keep an eye out for:
* `webpack: bundle is now VALID.` – the bundle has been loaded into memory and is now viewable in the browser. This will show up both once `npm start` has completed its setup, and also once updates you make to files have been re-compiled for viewing in the browser.
* `webpack: bundle is now INVALID.` – if you see this, then it means you have made updates to files that are still being compiled for browser viewing. Pages will still be viewable, but they will not see any updates you made yet.

Once running, open `http://localhost:8333` in your browser. If you wish to have the server reload automatically, you can install either [nodemon](https://github.com/remy/nodemon) or [forever](https://github.com/foreverjs/forever).

### To stop
Use `^C` to stop the node process `npm start` starts.

#### Configuration

`npm start` can be configured with the following environment variables

| Variable      | Default                       | Description                                    |
| ------------- | ----------------------------- | ---------------------------------------------- |
| `NODE_ENV`    | `null`                        | If not `production`, app acts like development |
| `PORT`        | `8333`                        | Port for devserver (http://localhost:XXXX)     |

### Deploy Environment Variables

| Variable                 | Default | Description                                      |
| ------------------------ | ------- | ------------------------------------------------ |
| `FASTLY_SERVICE_ID`      | `''`    | Fastly service ID for `bin/configure-fastly.js`  |
| `FASTLY_API_KEY`         | `''`    | Fastly API key for `bin/configure-fastly.js`     |
| `FASTLY_ACTIVATE_CHANGES`| `false` | Activate changes and purge all after configuring |
| `AWS_ACCESS_KEY_ID`      | `''`    | AWS access key id for S3                         |
| `AWS_SECRET_ACCESS_KEY`  | `''`    | AWS secret access key for S3                     |
| `S3_BUCKET_NAME`         | `''`    | S3 bucket name to deploy into                    |
