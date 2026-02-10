FROM node:20-alpine

# Set pnpm home
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY . .

# Install dependencies for all workspace packages
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Generate Prisma Client (needed for @relay/db)
RUN pnpm --filter @relay/db db:generate

# Build the specific app along with dependencies
RUN pnpm --filter ws build

EXPOSE 4000

CMD [ "pnpm", "--filter", "ws", "start" ]
