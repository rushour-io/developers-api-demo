/**
 * m
 * @module RushourClient
 */

/** Client for Rushour API  */
class RushourClient {

  /** Create a client
   *
   * @param {object} deps - dependancies needed by the client
   * @param {object} options
   */
  constructor(deps, options) {
    const { logger, httpClient } = deps
    const { host, userToken = '', integrationToken = ''} = options

    // deps
    this._logger = logger
    this._httpClient = httpClient

    // options
    this._host = host
    this._userToken = userToken
    this._integrationToken = integrationToken
  }

  /** Get the user token
   *
   * @return {string} The user token
   */
  get userToken() {
    return this._userToken;
  }

  /** Set the user token
   *
   * @param {string} The user token
   */
  set userToken(userToken) {
    this._userToken = userToken;
  }

  getUserRequestConfig() {
    return {
        headers: { Authorization: `Bearer ${this._userToken}` }
      }
  }

  /** Get the integration token
   *
   * @return {string} The integration token
   */
  get integrationToken() {
    return this._integrationToken;
  }

  /** Set the integration token
   *
   * @param {string} The integration token
   */
  set integrationToken(integrationToken) {
    this._integrationToken = integrationToken;
  }

  getIntegrationRequestConfig() {
    return {
        headers: { Authorization: `Bearer ${this._integrationToken}` }
      }
  }

  async createApplication(data = {}) {
    const endpoint = '/apps'
    const config = this.getUserRequestConfig()
    const app = await this._httpClient.post(`${this._host}${endpoint}`, data, config)
      .then(val => {
        this._logger.info(`[app] createApplication - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app] createApplication - Error`)

        throw error
      })

    return app
  }

  async getApplicationDetails(appId) {
    const endpoint = `/apps/${appId}`
    const config = this.getUserRequestConfig()
    const app = await this._httpClient.get(`${this._host}${endpoint}`, config)
      .then(val => {
        this._logger.info(`[app ${appId}] getApplicationDetails - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app ${appId}] getApplicationDetails - Error`)

        throw error
      })

    return app
  }

  async updateApplication(appId, data) {
    const endpoint = `/apps/${appId}`
    const config = this.getUserRequestConfig()
    const app = await this._httpClient.patch(`${this._host}${endpoint}`, data, config)
      .then(val => {
        this._logger.info(`[app ${appId}] updateApplication - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app ${appId}] updateApplication - Error`)

        throw error
      })

    return app
  }

  async getPrivateApplications() {
    const endpoint = '/apps/me'
    const config = this.getUserRequestConfig()
    const apps = await this._httpClient.get(`${this._host}${endpoint}`, config)
      .then(val => {
        this._logger.info(`[app ${appId}] getPrivateApplications - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app ${appId}] getPrivateApplications - Error`)

        throw error
      })

    return apps
  }

  async getApplicationLogs(appId) {
    const endpoint = `/apps/${appId}/logs`
    const config = this.getUserRequestConfig()
    const logs = await this._httpClient.get(`${this._host}${endpoint}`, config)
      .then(val => {
        this._logger.info(`[app ${appId}] getApplicationLogs - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app ${appId}] getApplicationLogs - Error`)

        throw error
      })

    return logs
  }

  async createWebhook(appId, data = {}) {
    const endpoint = `/apps/${appId}/webhooks`
    const config = this.getUserRequestConfig()
    const webhook = await this._httpClient.post(`${this._host}${endpoint}`, data, config)
      .then(val => {
        this._logger.info(`[app ${appId}] createWebhook - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app ${appId}] createWebhook - Error`)

        throw error
      })

    return webhook
  }

  async getWebhookList(appId) {
    const endpoint = `/apps/${appId}/webhooks`
    const config = this.getUserRequestConfig()
    const webhooks = await this._httpClient.get(`${this._host}${endpoint}`, config)
      .then(val => {
        this._logger.info(`[app ${appId}] getWebhookList - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app ${appId}] getWebhookList - Error`)

        throw error
      })

    return webhooks
  }

  async updateWebhook(appId, webhookId, data) {
    const endpoint = `/apps/${appId}/webhooks/${webhookId}`
    const config = this.getUserRequestConfig()
    const app = await this._httpClient.patch(`${this._host}${endpoint}`, data, config)
      .then(val => {
        this._logger.info(`[app ${appId}] updateWebhook - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app ${appId}] updateWebhook - Error`)

        throw error
      })

    return app
  }

  async deleteWebhook(appId, webhookId) {
    const endpoint = `/apps/${appId}/webhooks/${webhookId}`
    const config = this.getUserRequestConfig()
    const app = await this._httpClient.delete(`${this._host}${endpoint}`, config)
      .then(val => {
        this._logger.info(`[app ${appId}] deleteWebhook - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app ${appId}] deleteWebhook - Error`)

        throw error
      })

    return app
  }

  async uploadOrder(appId, integrationId, order) {
    const endpoint = `/apps/${appId}/integrations/${integrationId}/orders`
    const config = this.getIntegrationRequestConfig()
    const response = await this._httpClient.post(`${this._host}${endpoint}`, order, config)
      .then(val => {
        this._logger.info(`[app ${appId}] uploadOrder - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app ${appId}] uploadOrder - Error`)
        // this._logger.error(error)
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);

        throw error
      })

    return response
  }

  async uploadMenu(appId, integrationId, menu) {
    const endpoint = `/apps/${appId}/integrations/${integrationId}/menus`
    const config = this.getIntegrationRequestConfig()
    const response = await this._httpClient.post(`${this._host}${endpoint}`, menu)
      .then(val => {
        this._logger.info(`[app ${appId}] uploadMenu - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app ${appId}] uploadMenu - Error`)

        throw error
      })

    return response
  }

  async getAccessToken(appId, integrationId, data, appSecret) {
    const endpoint = `/apps/${appId}/integrations/${integrationId}/token`
    const config = {
      auth: {
        username: appId,
        password: appSecret
      }
    }
    const accessToken = await this._httpClient.post(`${this._host}${endpoint}`, data, config)
      .then(val => {
        this._logger.info(`[app ${appId}] getAccessToken - Success`)
        this._logger.debug(val.data)

        return val.data
      })
      .catch((error) => {
        this._logger.error(`[app ${appId}] getAccessToken - Error`)

        throw error
      })

    return accessToken
  }
}

module.exports =  RushourClient
