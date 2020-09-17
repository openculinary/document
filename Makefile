.PHONY: tests

lint:
	npx eslint src

tests:
	npx mocha
