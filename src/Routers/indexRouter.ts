import express from 'express';
const router = express.Router();

// Home page route.
router.get('/', (req, res) => {
  res.render('index', { title: 'TradePlatform', message: '首頁' });
});

// About page route.
router.get('/about', (req, res) => {
  res.send('About The Concept');
});

export default router;
