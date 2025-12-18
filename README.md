# Automation

---

### Start up the project

> `.env file`

```
DATABASE_URL=

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=http://localhost:3000

GOOGLE_GENERATIVE_AI_API_KEY=
```


```sh
npx prisma migrate dev
npx prisma generate
npm run dev
```