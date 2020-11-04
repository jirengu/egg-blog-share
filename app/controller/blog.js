'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async list() {
    const { ctx } = this;
    ctx.body = 'list';
  }

  async show() {
    this.ctx.body = 'show';
  }

  async update() {
    this.ctx.body = 'update';
  }

  async create() {
    this.ctx.body = 'create';
  }

  async delete() {
    this.ctx.body = 'delete';
  }
}

module.exports = BlogController;
