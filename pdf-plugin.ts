import type { Plugin } from 'vite';
import { chromium, type Browser, type Page } from 'playwright';
import type { AddressInfo } from 'net';

export default async function pdfPlugin(): Promise<Plugin> {
	let browser: Browser;
	let page: Page;

	async function renderPdf() {
		await page.reload();
		await page.pdf({ path: './resume.pdf' });
	}

	return {
		name: 'pdf',
		async buildStart() {
			browser = await chromium.launch();
			page = await browser.newPage();
		},
		configureServer(server) {
			server.httpServer?.once('listening', async () => {
				const address = server.httpServer?.address() as unknown as AddressInfo;
				await page.goto(`http://localhost:${address.port}`);
				await renderPdf();
			});
		},
		async handleHotUpdate(ctx) {
			if (ctx.file.endsWith('resume.pdf')) return;
			await renderPdf();
		},
		async buildEnd() {
			await page.close();
			await browser.close();
		}
	};
}
