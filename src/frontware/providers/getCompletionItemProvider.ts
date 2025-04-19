import * as path from "path";
import {
    languages,
    CompletionItem,
    CompletionItemKind,
    SnippetString,
    TextDocument,
    Position,
    CancellationToken,
    CompletionContext,
    Range
} from "vscode";

export default function getCompletionItemProvider() {
    return languages.registerCompletionItemProvider(
        ["javascript", "typescript", "javascriptreact", "typescriptreact"],
        {
            provideCompletionItems(
                document: TextDocument,
                position: Position,
                _token: CancellationToken,
                _context: CompletionContext
            ) {
                const lineText = document.lineAt(position.line).text;
                const prefix = lineText.slice(0, position.character);
                const m = prefix.match(/\b([A-Za-z_]*)$/);
                if (!m || !"export".startsWith(m[1].toLowerCase())) {
                    return undefined;
                }
                const currentWord = m[1];
                const range = new Range(
                    position.line,
                    position.character - currentWord.length,
                    position.line,
                    position.character
                );

                const snippets: Array<{ label: string; body: SnippetString }> = [
    
                    {
                        label: "export function",
                        body: new SnippetString(
                            "export function ${1:${TM_FILENAME_BASE}}"
                        ),
                    },
                    {
                        label: "export default function",
                        body: new SnippetString(
                            "export default function ${1:${TM_FILENAME_BASE}}"
                        ),
                    },
                    {
                        label: "export default class",
                        body: new SnippetString(
                            "export default class ${1:${TM_FILENAME_BASE}}"
                        ),
                    },
                    {
                        label: "export interface",
                        body: new SnippetString(
                            "export interface ${1:${TM_FILENAME_BASE}}"
                        ),
                    },
                    {
                        label: "export default interface",
                        body: new SnippetString(
                            "export default interface ${1:${TM_FILENAME_BASE}}"
                        ),
                    },
                    {
                        label: "export const",
                        body: new SnippetString(
                            // 1 = symbol name (defaults to filename), 2 = initializer, 0 = final cursor
                            "export const ${1:${TM_FILENAME_BASE}}"
                        ),
                    },
                    {
                        label: "export var",
                        body: new SnippetString(
                            // 1 = symbol name (defaults to filename), 2 = initializer, 0 = final cursor
                            "export const ${1:${TM_FILENAME_BASE}}"
                        ),
                    },
                ];

                return snippets.map(({ label, body }) => {
                    const item = new CompletionItem(label, CompletionItemKind.Snippet);
                    item.insertText = body;
                    item.filterText = label;
                    item.range = range;
                    return item;
                });
            },
        },
        ...["e", "x", "p", "o", "r", "t"] // Trigger completion provider early
    );
}