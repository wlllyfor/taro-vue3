import request from '../request'

export function getBookList() {
  return request.get('books/getFindList')
}

export function getBookDetail(id: number) {
  return request.post('books/getBookDetail', {
    id
  })
}
