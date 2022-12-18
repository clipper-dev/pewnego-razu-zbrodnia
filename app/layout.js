import '../styles/globals.css'
export default function Layout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Pewnego Razu Zbrodnia</title>
          <meta name="description" content="Podcast o prawdziwych zbrodniach, niewyjaśnionych śledztwach i przerażających morderstwach. Rozsiądź się i daj się ponieść opowieści." />
          <link rel="icon" href="/res/favicon.png" />
        </head>
        <body>{children}</body>
      </html>
    );
  }
  