export function useResource(){
    return {
        posts: wrapPromise(fetchPosts()),
        photos: wrapPromise(fetchPhotos())
    }
}

function wrapPromise(promice) {
    let status = 'pending'
    let result 
    const suspender = promice
    .then(r =>{
        result = r
        status = 'success'
    }, e => {
        result = e
        status ='error'
    })
    return {
        read() {
            if (status === 'pending') {
                throw suspender
            } else if (status === 'error') {
                throw result
            } else if (status === 'success') {
                return result
            }
        }
    }
}
function fetchPosts(){
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(res => res.json())
}

function fetchPhotos(){
    return fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
    .then(res => res.json())
}