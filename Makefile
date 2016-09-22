ESLINT=./node_modules/.bin/eslint
NODE=node
SASSLINT=./node_modules/.bin/sass-lint -v
WATCH=./node_modules/.bin/watch
WEBPACK=./node_modules/.bin/webpack

# ------------------------------------

build:
	@make clean
	@make webpack

clean:
	rm -rf ./build
	mkdir -p build

sync-fastly:
	$(NODE) ./bin/configure-fastly.js

webpack:
	$(WEBPACK) --bail

# ------------------------------------

start:
	$(NODE) ./dev-server/index.js

# ------------------------------------

lint:
	$(ESLINT) . --ext .js,.jsx,.json
	$(SASSLINT) ./src/*.scss
	$(SASSLINT) ./src/**/*.scss


# ------------------------------------

test:
	@make lint
	@make build

.PHONY: build clean sync-fastly webpack stop start lint
