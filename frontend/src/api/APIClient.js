import { HTTP } from './RequestType'

function query(query) {
    var path = `post/`
    return HTTP.get(path)
}

export default {
    query
}