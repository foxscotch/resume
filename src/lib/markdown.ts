import type { Root } from 'hast';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

/**
 * Remove the outermost paragraph element of an HTML AST, provided that it is solitary
 *
 * in markdown, a basic string will be put inside a paragraph element. we don't want that when we're putting the
 * contents inside a list item, so we'll simply remove the outermost paragraph element before stringifying the AST.
 * seems more reliable than removing the element markup from the string manually afterwards
 */
function unwrapParagraph() {
	return (ast: Root) => {
		if (ast.children.length === 1) {
			const child = ast.children[0];

			if (child.type === 'element' && child.tagName === 'p') {
				ast.children = child.children;
			}
		}
	};
}

const standard = unified().use(remarkParse).use(remarkRehype).use(rehypeStringify);

const unwrapped = unified()
	.use(remarkParse)
	.use(remarkRehype)
	.use(unwrapParagraph)
	.use(rehypeStringify);

export function md(s: string) {
	return standard.processSync(s);
}

export function mdnop(s: string) {
	return unwrapped.processSync(s);
}
