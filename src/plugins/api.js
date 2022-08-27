import apiClient from "../services/apiClient"

export default {
  install: (app, options) => {
    app.provide('api', apiClient)
  }
}