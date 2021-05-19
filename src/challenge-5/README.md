# Challenge #5 - Custom Hook (~2h)

## 🔢 Objectifs

1. Créer ses propres hooks
2. Maitriser les hooks de base
3. Modéliser et structurer un state local

## 📋 Consignes

En reprenant le code du Challenge #1, créer un hook `usePokemons` qui externalise toute la logique du composant `Pokemons.tsx`. Remplacer `useState` par `useReducer` afin de fournir un état `loading` et `error`, ainsi que de pouvoir stocker les différentes pages séparément. Fournir une API intuitive et agréable à l'usage.

## 🗜️ Contraintes

- N'utiliser que React et react-dom
- Toutes les _props_ sont correctement typées
- Respecter les bonnes pratiques d'accessibilité et d'expérience utilisateur
- Respecter les bonnes pratiques JavaScript/TypeScript sans linter

## 🚀 Livrable

- _Pull request_ vers `main`

## 📚 Resources

- [Construire vos propres Hooks](https://fr.reactjs.org/docs/hooks-custom.html)
- [useReducer](https://fr.reactjs.org/docs/hooks-reference.html#usereducer)
- [🥚 Shareable Custom Hooks in React](https://egghead.io/courses/shareable-custom-hooks-in-react)
- [🕶 Awesome Frontend](https://github.com/orgs/antistatique/teams/frontend/discussions/2)
- [TypeScript Cheat Sheet](https://typescript-cheatsheet.vercel.app/)
