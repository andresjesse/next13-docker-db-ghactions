This is an experiment with: NextJS 13, Docker, Prisma, Postgres and Github Actions

# Running in Development

Copy and fill environment variables:

- `$ cp .env.example .env`

Run with docker:

- Regular: `$ docker compose up`
- Rebuilding (if changed docker configs): `$ docker compose up --build --force-recreate`

## Postgres Database

Connection string is already set in `.env.example`

Adminer interface: http://localhost:8080 (user=`postgres`, password=`postgres`)

## Prisma ORM in Dev

Prisma commands must be executed from inside `app` container! You can use this command to enter app container: `$ docker compose exec app bash`

Migrate: `$ npx prisma migrate dev`

Generate client: `$ npx prisma generate`

Seed: `$ npx prisma db seed`

Notes:

- Check prisma seed script in `package.json` for ts-node execution details (prevents syntax error on "import" statement).
- Check `src/lib/prisma.ts` for details about prisma initialization with NextJS.

# Deploy to production

- Regular: `$ docker compose up`
- Rebuilding (if changed docker configs): `$ docker compose -f docker-compose.production.yml up --force-recreate`

docker compose exec app npx prisma migrate deploy
docker compose exec app npx prisma db seed
