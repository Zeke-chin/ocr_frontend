import {axios} from '@/utils/request'

export function SendImage (parameter) {
  return axios({
    url: '/ocr',
    method: 'post',
    data: parameter
  })
}
