![Tauri Spotify Clone](https://i.imgur.com/BBRJkFA.png)

# Tauri Spotify Clone

This project is a clone of the Spotify desktop app built using Tauri and Tailwind. It includes some simple functionality such as "routing".

> You can download pre-built final bundles from the [Releases](https://github.com/agmmnn/tauri-spotify-clone/releases) section.

![gif](https://user-images.githubusercontent.com/16024979/236287892-e13e466f-afdf-405d-a947-e8e3ac07502d.gif)

## Getting Started

```
gh repo clone agmmnn/tauri-spotify-clone
cd tauri-spotify-clone
pnpm i
```

```
pnpm tauri dev
pnpm tauri build
```

## Customization

The template can be customized by editing the following files:

- [src-tauri/tauri.conf.json](src-tauri/tauri.conf.json)
- [package.json](/package.json)
- [src-tauri/cargo.toml](src-tauri/Cargo.toml)
- To change the app icon, update `app-icon.png`, and then run `pnpm tauri icon`. This will automatically generate icon files into _src-tauri/icons_.

## Folder Structure

```js
.
├── public
├── src               //frontend src:
│   ├── assets
│   ├── components
│   ├── data
├── src-tauri         //backend src:
│   ├── build.rs
│   ├── Cargo.lock
│   ├── Cargo.toml    //https://doc.rust-lang.org/cargo/reference/manifest.html
│   ├── icons
│   ├── src           //rust codes
│   └── tauri.conf.json  //tauri config file https://next--tauri.netlify.app/next/api/config
├── index.html
├── package.json
├── postcss.config.js
├── prettier.config.cjs     //prettier config file https://prettier.io/docs/en/configuration.html
├── tailwind.config.js     //tailwind config file https://tailwindcss.com/docs/configuration
└── tsconfig.json          //typescript config file https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
└── vite.config.ts         //vite config file https://vitejs.dev/config/
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
