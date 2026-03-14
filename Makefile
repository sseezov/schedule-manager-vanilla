start-server:
	cd backend && node src/index.js

start-front-schedule:
	cd frontend-schedule && npm run dev

start-front-admin:
	cd frontend-admin && npm run dev

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

