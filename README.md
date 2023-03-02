This is an experiment with: NextJS 13, Docker, Prisma, Postgres and Github Actions

# Running Locally

Copy and fill environment variables:

- `$ cp .env.development.local.example .env.development.local`

Run with docker:

- Regular: `$ docker compose up`
- Rebuilding (if changed docker configs): `$ docker compose up --build --force-recreate`
