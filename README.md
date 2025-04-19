# Velto

**Export Autocomplete** is a lightweight VS Code extension that helps you write `export` statements faster in JavaScript and TypeScript files.

As soon as you start typing `export`, it provides intelligent auto-completions for common export patterns — all based on your current file name. It's especially useful when creating new modules and components where export declarations are common.

---

## ✨ Features

- 🚀 Auto-suggests `export` statements as soon as you start typing `exp`, `expo`, etc.
- 🧠 Smart snippets that default to your current file name.
- ⌨️ Supports `export const`, `export function`, `export class`, `export interface`, and more.
- 🛠 Tab stops let you quickly rename symbols after insertion.
- ⚙️ Works in:
  - JavaScript
  - TypeScript
  - React (JSX/TSX)

---

## 📦 Snippets Included

| Snippet Suggestion         | Inserts                               |
| -------------------------- | ------------------------------------- |
| `export const`             | `export const MyFile = ...`           |
| `export var`               | `export var MyFile = ...`             |
| `export function`          | `export function MyFile(...)`         |
| `export default function`  | `export default function MyFile(...)` |
| `export default class`     | `export default class MyFile`         |
| `export interface`         | `export interface MyFile {}`          |
| `export default interface` | `export default interface MyFile {}`  |

> 📝 `MyFile` is automatically replaced with your current file name (without extension), and is editable after insertion.

---

## 🛠 Usage

1. Start typing `exp`, `expo`, or any part of `export`.
2. The autocomplete popup will suggest export snippets.
3. Select the desired snippet and press `Enter` or `Tab`.
4. Rename the identifier if needed — it's pre-filled with your current file name.

---

## 📁 Example

Typing:

```ts
exp
```

Will instantly suggest:

```
export const ▸
export function ▸
export default class ▸
...
```

Choosing `export const` in a file named `User.ts` will insert:

```ts
export const User
```

With `User` selected so you can immediately rename it.

---

## 🧩 Extension Details

- Written in TypeScript
- Uses VS Code's native `CompletionItemProvider` API
- Triggers on any character in the word `export`

---

## 💡 Why use this?

When you're building lots of modules, components, or types, writing out export statements gets repetitive. This extension helps you go faster, with more consistency and less boilerplate typing.

---

## 📃 License

MIT
