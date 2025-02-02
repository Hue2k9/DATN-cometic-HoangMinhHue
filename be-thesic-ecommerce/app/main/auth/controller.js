'use strict';

const AuthService = require('./service');

class AuthController {
  constructor() {
    this.service = new AuthService();
  }

  async login(request) {
    try {
      const { payload } = request;
      return await this.service.login(payload);
    } catch (err) {
      throw err;
    }
  }

  async loginByGoogle(request) {
    try {
      const { payload } = request;
      return await this.service.loginByGoogle(payload.token)
    } catch (err) {
      throw err;
    }
  }

  async loginAdmin(request) {
    try {
      const { payload } = request;
      return await this.service.loginAdmin(payload);
    } catch (err) {
      throw err;
    }
  }

  async register(request) {
    try {
      const { payload } = request;
      return await this.service.register(payload);
    } catch (err) {
      throw err;
    }
  }

  async logout(request) {
    try {
      return {
        message: 'Log out success'
      };
    } catch (err) {
      throw err;
    }
  }

  async forgotPassword(request) {
    try {
      return await this.service.forgotPassword(request.payload.email);
    } catch (err) {
      throw err;
    }
  }

  async resetPassword(request) {
    try {
      const { resetPasswordToken, password } = request.payload;
      return await this.service.resetPassword(resetPasswordToken, password);
    } catch (err) {
      throw err;
    }
  }

  async loginFacebook(request) {
    try {
      return await this.service.loginFacebook(request);
    } catch (err) {
      throw err;
    }
  }

  async requestCartToken(request) {
    try {
      return await this.service.requestCartToken();
    } catch (err) {
      throw err;
    }
  }
}

module.exports = AuthController;
