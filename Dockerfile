FROM oven/bun:1.3
WORKDIR /app

COPY package.json bun.lock ./
COPY prisma/schema.prisma ./prisma/schema.prisma
RUN bun install --frozen-lockfile

COPY . .

ENV SKIP_ENV_VALIDATION=1
ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URL=file:./build.db
ENV BETTER_AUTH_SECRET=build-time-placeholder-secret-32chars
ENV BETTER_AUTH_URL=http://localhost:3000

RUN bunx prisma generate \
  && bunx prisma migrate deploy \
  && bun run build

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV DATABASE_URL=file:/data/spooler.db

RUN mkdir -p /data
EXPOSE 3000
VOLUME /data

CMD ["sh", "-c", "bunx prisma migrate deploy && bun run start"]
