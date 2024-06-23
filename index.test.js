const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should return Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('<h1>Hello World!</h1>');
  });
});

describe('GET /api/notes', () => {
  it('should return an array of notes', async () => {
    const response = await request(app).get('/api/notes');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { id: 1, content: 'HTML is easy', date: '2022-01-10T17:30:31.098Z', important: true },
      { id: 2, content: 'Browser can execute only Javascript', date: '2022-01-10T18:39:34.091Z', important: false },
      { id: 3, content: 'GET and POST are the most important methods of HTTP protocol', date: '2022-01-10T19:20:14.298Z', important: true }
    ]);
  });
});

describe('GET /api/notes/:id', () => {
  it('should return a note object', async () => {
    const response = await request(app).get('/api/notes/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, content: 'HTML is easy', date: '2022-01-10T17:30:31.098Z', important: true });
  });

  it('should return 404 for non-existent note', async () => {
    const response = await request(app).get('/api/notes/999');
    expect(response.status).toBe(404);
  });
});
