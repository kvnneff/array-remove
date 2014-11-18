test: node_modules
	./node_modules/.bin/mocha test/

node_modules:
	npm install

clean:
	@rm -rf node_modules

.PHONY: clean
.PHONY: test
