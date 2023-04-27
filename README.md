# OpenAI's GPT model usage, summarize the provided link and generated the summary by AI, practical and useful for real life scenarios!

Live address at:

---

Used Vite, React.js, RapidAPI, tailwind CSS, redux toolkit

create app and other packages to install as:

=> npm create vite@latest => y => ./ => React => JavaScript

=> npm i @reduxjs/toolkit react-redux

=> npm install -D tailwindcss postcss autoprefixer => npx tailwindcss init -p => tailwind.config.js file modified with content, also add customized font family inside theme/extend => add font links inside "index.html"

---

=> create app and set up basic folders and files

=> create layout as Hero (nav, header and subtitle...), Demo (search bar, broswer history, summary result showcase)

=> implement redux toolkit to interact with API => provider and store inside main.jsx, and create store and article api reducer (with baseQuery and endpoints) inside services folder => the format inside store and main are the offical format as it is => use RapidAPI "Article Extractor and Summarizer" as baseUrl => env variable inside .env must start with "VITE\_", and specific way to import env variable inside reducer is:

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

don't forget to add .env inside .gitignore file to avoid uploading .env to github

=> use localStorage to store browser history and able to click and check summary without search again

=> show summarized paragraphy

=> add function to copy the url with copy button:

const handleCopy = (copyUrl) => {

setCopied(copyUrl);

navigator.clipboard.writeText(copyUrl);

setTimeout(() => setCopied(false), 3000);

};
