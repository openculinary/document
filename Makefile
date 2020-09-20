.PHONY: tests

lint:
	npx tslint 'src/**/*.ts'

tests:
	TS_NODE_IGNORE='node_modules/(?!document-prev)' npx mocha
