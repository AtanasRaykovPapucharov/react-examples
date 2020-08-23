import { fetch } from 'whatwg-fetch'
import { CONST } from './Constants'

export const Requester = () => {
    return {
        getAll: (url) => {
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': CONST.TYPE_JSON,
                    'X-Auth-Token': CONST.AUTH_TOKEN
                }
            })
            .then((resp) => {
              return resp.json()
            })
        },
        getById: (url, id) => {
            return fetch(`${url}/:${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': CONST.TYPE_JSON,
                    'X-Auth-Token': CONST.AUTH_TOKEN
                }
            })
            .then((resp) => {
              return resp.json()
            })
        },
        post: (url, obj) => {
            return fetch(url, {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': CONST.TYPE_JSON,
                    'X-Auth-Token': CONST.AUTH_TOKEN
                }
            })
            .then((resp) => {
              return resp.json()
            })
        },
        delete: (url, id) => {
            return fetch(url, {
                method: 'DELETE',
                body: JSON.stringify({
                    id
                }),
                headers: {
                    'Content-Type': CONST.TYPE_JSON,
                    'X-Auth-Token': CONST.AUTH_TOKEN
                }
                .then((resp) => {
                  return resp.json()
                })
            })
        },
        update: (url, id, updateObj) => {
            return fetch(url, {
                method: 'PUT',
                body: JSON.stringify({
                    id,
                    updateObj
                }),
                headers: {
                    'Content-Type': CONST.TYPE_JSON,
                    'X-Auth-Token': CONST.AUTH_TOKEN
                }
            })
            .then((resp) => {
              return resp.json()
            })
        }
    }
}
