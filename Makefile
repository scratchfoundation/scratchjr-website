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


deploy:
	echo "Go run deploy script on Jenkins"

webpack:
	$(WEBPACK) --bail

# ------------------------------------

start:
	$(NODE) ./server/app.js

# ------------------------------------

lint:
	$(ESLINT) . --ext .js,.jsx,.json
	$(SASSLINT) ./src/*.scss
	$(SASSLINT) ./src/**/*.scss


# ------------------------------------

test:
	@make lint
	@make build

.PHONY: build clean deploy webpack stop start lint
