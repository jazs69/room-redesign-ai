# 🏠 Room Redesign AI

[![Vite](https://img.shields.io/badge/built%20with-vite-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-19.x-61dafb.svg?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-5.x-3178c6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

> **Upload an image of your room and let AI generate a redesigned version!**  
> This app simulates AI-powered room redesign using placeholder images.

---

## 🚀 Quick Start

### 1. Clone & Install

```sh
git clone https://github.com/your-username/room-redesign-ai.git
cd room-redesign-ai
npm install
```

### 2. Set Up API Key

Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your-gemini-api-key-here
```

> **Note:** The API key is not required for the simulation, but is included for future real AI integration.

### 3. Run Locally

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🖼️ How to Use

1. **Upload** a photo of your room (drag & drop or click).
2. **Select** a design style from the dropdown.
3. **Click** "✨ Redesign My Room" to generate a simulated redesign.
4. **View** the original and redesigned images side by side.

---

## 🛠️ Project Structure

<details>
<summary>Click to expand</summary>

```
room-redesign-ai/
├── components/         # React UI components
├── services/           # API/service logic
├── types.ts            # Shared TypeScript types
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── vite.config.ts      # Vite config
├── tsconfig.json       # TypeScript config
├── README.md           # This file
└── ...
```
</details>

---

## 📦 Build & Deploy

To build for production:

```sh
npm run build
```

To preview the production build:

```sh
npm run preview
```

---

## 📸 Demo

![Demo Screenshot](https://user-images.githubusercontent.com/0000000/room-redesign-demo.png)
<!-- Replace with your own screenshot or animated GIF -->

---

## 🤖 About

- **Tech Stack:** React 19, Vite, TypeScript, Tailwind CSS
- **Image Generation:** Simulated using [picsum.photos](https://picsum.photos/)
- **License:** MIT

---

## 🙋‍♂️ Contributing

Pull requests and issues are welcome!  
Feel free to [open an issue](https://github.com/your-username/room-redesign-ai/issues) or submit a PR.

---

## 📄 License

MIT © [Your Name](https://github.com/your-username)
