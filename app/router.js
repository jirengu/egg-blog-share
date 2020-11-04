'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/blog', controller.blog.list);
  router.get('/blog/:blogId', controller.blog.show);
  router.post('/blog', controller.blog.create);
  router.patch('/blogs/:blogId', controller.blog.update);
  router.delete('/blog/:blogId', controller.blog.delete);
};
