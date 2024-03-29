This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

After cloning the repo, copy `.env` to `.env.local` and provide values for `CHAT_API_URL` and `CHAT_API_KEY`.


### Run with Docker

```
docker build -t chatur-ui .
docker run -p 3000:3000 chatur-ui
```

### Run with npm
Check you have `node` installed, and install your package manager for node (`npm`, `yarn`, `pnpm` or `bun`):

```
which node
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Testing with Ollama

Testing is being carried out using the [phi language model](https://ollama.ai/library/phi) with [Ollama](https://ollama.ai/). Here are the steps necessary to install Ollama and Phi:

1. Download, unzip and install Ollama on your computer.
2. Once installed, open your terminal and execute `ollama run phi` -- this is going to download the phi model.
3. Run the model with `ollama serve`. You should be able to access the service at `127.0.0.1:11434`.
