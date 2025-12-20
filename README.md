# Automation X Nodebase

---

### Start up the project

> `.env file`

```

DATABASE_URL=""

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=

GOOGLE_GENERATIVE_AI_API_KEY=

SENTRY_AUTH_TOKEN=""
```


```sh
npx prisma migrate dev
npx prisma generate
npm run dev
# or
npm run dev:all
```