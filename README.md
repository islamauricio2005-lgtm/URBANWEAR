<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>StyleHub</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    :root {
      --space-xs: 0.5rem;
      --space-sm: 1rem;
      --space-md: 1.5rem;
      --space-lg: 2rem;
      --radius-sm: 0.5rem;
      --radius-md: 1rem;
      --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.08);
      --shadow-md: 0 10px 25px rgba(0, 0, 0, 0.12);
      --color-bg: #f7f7fb;
      --color-surface: #ffffff;
      --color-text: #1f1f29;
      --color-muted: #5f6470;
      --color-accent: #1f4e79;
      --color-accent-soft: #eaf2f8;
      --container-max: 1200px;
      --fs-body: clamp(0.95rem, 1vw, 1rem);
      --fs-h1: clamp(2rem, 5vw, 3.5rem);
      --fs-h2: clamp(1.5rem, 3vw, 2.3rem);
      --fs-h3: clamp(1.05rem, 2vw, 1.2rem);
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      font-size: var(--fs-body);
      line-height: 1.6;
      color: var(--color-text);
      background: var(--color-bg);
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .container {
      width: min(100% - 2rem, var(--container-max));
      margin-inline: auto;
    }

    header {
      background: var(--color-surface);
      border-bottom: 1px solid #e5e7eb;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .header-inner {
      width: min(100% - 2rem, var(--container-max));
      margin-inline: auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
      padding: 1rem 0;
    }

    .brand {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.1rem;
    }

    .brand h1 {
      margin: 0;
      font-size: 1.5rem;
      color: var(--color-accent);
      line-height: 1.1;
    }

    .brand span {
      color: var(--color-muted);
      font-size: 0.9rem;
    }

    .nav-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-links a {
      display: inline-block;
      padding: 0.65rem 0.95rem;
      border-radius: 999px;
      transition: 0.25s ease;
    }

    .nav-links a:hover,
    .nav-links a:focus-visible {
      background: var(--color-accent-soft);
      color: var(--color-accent);
      outline: none;
    }

    .hero {
      padding: clamp(2rem, 6vw, 5rem) 0 2rem;
    }

    .hero-inner {
      display: grid;
      gap: var(--space-lg);
      align-items: center;
      grid-template-columns: 1fr;
    }

    .hero-copy {
      max-width: 60ch;
    }

    .hero-copy h2 {
      margin: 0 0 1rem;
      font-size: var(--fs-h1);
      line-height: 1.1;
    }

    .hero-copy p {
      margin: 0 0 1.5rem;
      color: var(--color-muted);
      max-width: 52ch;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      min-width: 10rem;
      padding: 0.9rem 1.25rem;
      border-radius: 999px;
      font-weight: bold;
      transition: 0.25s ease;
    }

    .btn-primary {
      background: var(--color-accent);
      color: #fff;
    }

    .btn-primary:hover,
    .btn-primary:focus-visible {
      filter: brightness(1.06);
      outline: none;
    }

    .btn-secondary {
      background: transparent;
      color: var(--color-accent);
      border: 1px solid #cfd8e3;
    }

    .btn-secondary:hover,
    .btn-secondary:focus-visible {
      background: var(--color-accent-soft);
      outline: none;
    }

    .hero-banner {
      background: linear-gradient(135deg, #dcecf8, #f8fbff);
      border-radius: var(--radius-md);
      padding: clamp(1.25rem, 4vw, 2rem);
      box-shadow: var(--shadow-sm);
      width: 100%;
    }

    .hero-banner img {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      border-radius: var(--radius-md);
    }

    .section-header {
      display: flex;
      flex-wrap: wrap;
      align-items: end;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .section-header h2 {
      margin: 0;
      font-size: var(--fs-h2);
    }

    .section-header p {
      margin: 0;
      color: var(--color-muted);
      max-width: 50ch;
    }

    .products {
      padding: 1rem 0 3rem;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
      gap: var(--space-md);
      align-items: start;
    }

    .card {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--color-surface);
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .card:hover,
    .card:focus-within {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
    }

    .card-media img {
      width: 100%;
      aspect-ratio: 4 / 5;
      object-fit: cover;
    }

    .card-body {
      display: grid;
      gap: 0.75rem;
      padding: 1rem;
      align-content: start;
      flex: 1;
    }

    .card-body h3 {
      margin: 0;
      font-size: var(--fs-h3);
      line-height: 1.3;
    }

    .card-body p {
      margin: 0;
      color: var(--color-muted);
    }

    .price-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      margin-top: auto;
    }

    .price {
      font-size: 1.1rem;
      font-weight: bold;
      color: var(--color-accent);
    }

    .tag {
      width: fit-content;
      padding: 0.35rem 0.7rem;
      border-radius: 999px;
      background: var(--color-accent-soft);
      color: var(--color-accent);
      font-size: 0.85rem;
      font-weight: bold;
    }

    .benefits {
      padding: 0 0 3rem;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
      gap: var(--space-md);
    }

    .benefit-card {
      background: var(--color-surface);
      padding: 1.25rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
    }

    .benefit-card h3 {
      margin-top: 0;
      margin-bottom: 0.6rem;
    }

    .benefit-card p {
      margin: 0;
      color: var(--color-muted);
    }

    footer {
      background: #111827;
      color: #f3f4f6;
      padding: 2rem 0;
      margin-top: 1rem;
    }

    .footer-inner {
      width: min(100% - 2rem, var(--container-max));
      margin-inline: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1rem;
    }

    .footer-inner p {
      margin: 0;
      color: #d1d5db;
    }

    @media (min-width: 768px) {
      .hero-inner {
        grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
      }
    }

    @media (min-width: 1024px) {
      .header-inner {
        padding: 1.2rem 0;
      }

      .hero {
        padding-top: 3.5rem;
      }
    }
  </style>
</head>
<body>
