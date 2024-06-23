const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should return Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

describe('GET /api/note', () => {
  it('should return a note object', async () => {
    const response = await request(app).get('/api/note');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ note: 'This is a note' });
  });
});

describe('GET /api/notes', () => {
  it('should return an array of notes', async () => {
    const response = await request(app).get('/api/notes');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, title: 'Note 1', content: 'Content 1' }]);
  });
});

describe('GET /nonexistent', () => {
  it('should return 404 for nonexistent routes', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
  });
});
