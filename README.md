# resume

I use this to generate my resume, or résumé if you're fancy.

## Start

To run it:

```sh
npm run dev
```

In addition to the web view (which is nice for hot reloading while you're changing stuff), the Vite
plugin in `pdf-plugin.ts` will also automatically generate a PDF version with every update, which
you can find in `out/resume.pdf`. I thought about making the location configurable, but honestly I
am the only person on the planet who's ever going to use this, so.......... it doesn't really
matter, does it?
