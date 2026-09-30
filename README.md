# React Feedback App

A small React application for adding ratings and written feedback, viewing entries, and summarising ratings.

## What this project demonstrates

React state, context, reusable form components and derived statistics.

## Run locally

```bash
npm ci
npm start
```

Create React App normally serves the development app at `http://localhost:3000`.
`npm run build` produces a static build. The existing `npm test` script does not by itself establish application test coverage.

## Code guide

`src/component/FeedbackForm.jsx` handles input; `FeedbackStats.jsx` summarises ratings; `context/FeedbackContext.jsx` shares state.

## Status

Learning project. Data starts from the bundled sample collection; this repository does not provide a production backend.

Dependencies are recorded in `package-lock.json`. The original framework generation is retained; no claim of a current production dependency audit is made.
