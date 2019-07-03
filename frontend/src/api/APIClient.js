import { HTTP } from './RequestType'

function newfeed() {
    var path = `post/`
    return HTTP.get(path)
}

function post(query) {
    var path = `notification/`
    return HTTP.post(path, {
        send: 'True',
        token: 'asdf',
        problem: 'dfsd',
        platform: 'iOS'
    })
}


export default {
    newfeed,
    post
}