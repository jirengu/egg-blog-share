'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/blog.test.js', () => {

  it('should GET /blog', () => {
    return app.httpRequest()
      .get('/blog')
      .expect('list')
      .expect(200);
  });

  it('should GET /blog/:blogId', () => {
    return app.httpRequest()
      .get('/blog/:blogId')
      .expect('show')
      .expect(200);
  });

  it('should POST /blog', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/blog')
      .expect('create')
      .expect(200);
  });

  // it('should PATCH /blog/:blogId', () => {
  //   app.mockCsrf();
  //   return app.httpRequest()
  //     .patch('/blog/:blogId')
  //     .expect('update')
  //     .expect(200);
  // });

  it('should DELETE /blog/:blogId', () => {
    app.mockCsrf();
    return app.httpRequest()
      .delete('/blog/:blogId')
      .expect('delete')
      .expect(200);
  });
});
