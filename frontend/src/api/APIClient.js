import { HTTP } from './RequestType'

function newfeed() {
    var path = `post/`
    return HTTP.get(path)
}

function post(query) {
    var path = `notification/`
    return HTTP.post(path, {
        send: query['send'],
        token: query['token'],
        problem: query['problem'],
        platform:query['platform']
    })
}


export default {
    newfeed,
    post
}