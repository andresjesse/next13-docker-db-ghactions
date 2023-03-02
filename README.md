This is an experiment with: NextJS 13, Docker, Prisma, Postgres and Github Actions

# Running Locally

Copy and fill environment variables:

- `$ cp .env.development.local.example .env.development.local`

Run with docker:

- Regular: `$ docker compose up`
- Rebuilding (if changed docker configs): `$ docker compose up --build --force-recreate`

# Postgres Database

Connection string:

Adminer interface: http://localhost:8080 (user=`postgres`, password=`postgres`)

# Prisma ORM

Prisma commands must be executed from inside `app` container!

Migrate: `$ npx prisma migrate dev`
