# GitHub Profile Scraper

A clean and modern single-page application (SPA) built with **React** and **Tailwind CSS** that allows users to search and view detailed GitHub profile information using the GitHub API.

<br/>

## ✨ Features

- 🔎 Search for any GitHub user by username
- 👤 View user details: avatar, name, bio, ID, join date, and more
- 📊 Display public stats: repositories, followers, following, and gists
- 📁 List of public repositories with:
  - Repository name
  - Description
  - Primary language
  - Last updated date
- 🌐 Direct links to GitHub profile and follow page
- 💡 Clean UI with aesthetic white background and orange accents
- 🚀 Optimized with custom hooks for data fetching

<br/>

## 🧰 Tech Stack

- **React**
- **React Router DOM**
- **Tailwind CSS**
- **GitHub REST API (v3)**


<br/>

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone git@github.com:aradhyacp/github-profile-scraper.git
   cd github-profile-scraper
   ```
2. **Install dependencies**
    ```
    npm i
    ```
3. **Start the development server**
    ```
    npm run dev
    ```

<br/>

## 🧪 Development Notes
- The project uses a custom hook useGithubData to fetch both user data and repositories.

- The username entered in the input (inside Header.jsx) is passed down to HeroSection.jsx for rendering data.

- The GitHub API has rate limits for unauthenticated requests. For production, consider using a personal access token stored securely in environment variables.
