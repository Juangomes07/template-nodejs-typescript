import app from './app';

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🎯 Server started on port ${process.env.PORT} 🎯`);
});
