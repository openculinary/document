.PHONY: tests

lint:
	npx tslint 'src/**/*.ts'

tests:
	npx mocha
