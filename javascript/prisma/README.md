# Prisma

This is a [Prisma tutorial](https://www.prisma.io/docs/getting-started/quickstart).

## Install

```sh
npm install
```

This will generate a fully typed ORM client based on our schema! To generate it directly:

```sh
npx prisma generate
```

## Migrate

To run migrations:

```sh
npx prisma migrate deploy
```

To create a new one, make changes to [schema.prisma](./prisma/schema.prisma) and then:

```sh
npx prisma migrate dev --name <name>
```

## Seed

```sh
npx prisma db seed --preview-feature
```
