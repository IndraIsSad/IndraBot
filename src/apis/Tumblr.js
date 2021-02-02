const { APIWrapper } = require('../')
const fetch = require('node-fetch')

const API_URL = 'https://api.tumblr.com/v2'

module.exports = class TumblrAPI extends APIWrapper {
  constructor () {
    super({
      name: 'tumblr',
      envVars: ['TUMBLR_API_KEY']
    })
  }

  /**
   * Get an array of 20 first posts with images
   * @param blog {String} The tumblr blog url
   * @param params {Object}
   */
  getPhotoPosts (blog, params = {}) {
    return this.request(`/blog/${blog}/posts/photo`, params)
  }
  // Default
  request (endpoint, queryParams = {}) {
    queryParams.api_key = "2e717565696a6f206d75e76172656c61"
    const qParams = new URLSearchParams(queryParams)
    return fetch(API_URL + endpoint + `?${qParams.toString()}`)
      .then(res => res.json())
  }
}
