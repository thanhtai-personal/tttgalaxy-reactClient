
const devConfig = {
  // `url` là đích đến của request
  url: '/api/',

  // `method` là phương thức được sử dụng để thực hiện request
  method: 'get', // mặc định là GET

  // `baseURL` sẽ được gán vào trước url khi url là đường dẫn tương đối.
  baseURL: 'http://localhost:3000/api/',

  // `transformRequest` cho phép thay đổi dữ liệu trước khi gửi lên server
  // Option này chỉ khả dụng cho các request có phương thức là 'PUT', 'POST', và 'PATCH'
  // Hàm cuối cùng phải trả về một thể hiện của Buffer hoặc ArrayBuffer hoặc FormData hoặc Stream
  // Bạn cũng có thể thay đổi header của request ở đây.
  transformRequest: [function (data, headers) {
    // Thực hiện thay đổi dữ liệu
    let jsonData = JSON.stringify(data);
    return jsonData;
  }],

  // `transformResponse` cho phép thay đổi dữ liệu trả về trước khi vào hàm xử lý trong then/catch
  transformResponse: [function (data) {
    // Thực hiện việc thay đổi dữ liệu
    return data;
  }],

  // `headers` là các header được đặt lại trước khi gửi lên server
  headers: { 
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  },

  // `params` là các tham số URL sẽ được gửi lên cùng request
  // Giá trị của nó phải là một object thuần hoặc là một đối tượng URLSearchParams
  params: {},

  // `paramsSerializer` là một hàm tùy chọn, có nhiệm vụ là serialize `params`
  // paramsSerializer: function (params) {
  //   return Qs.stringify(params, { arrayFormat: 'brackets' })
  // },

  // `data` là dữ liệu sẽ được gửi theo body của request
  // Chỉ khả dụng cho các request có phương thức là 'PUT', 'POST', và 'PATCH'
  // Khi không cài đặt `transformRequest`, data phải thuộc một trong các kiểu sau:
  // - Chuỗi, object thuần, ArrayBuffer, ArrayBufferView, URLSearchParams, FormData, File, Blob, Stream, Buffer
  data: {},
  // `timeout` chỉ định số mili giây khi request vượt quá thời gian truy cập và bị hủy bỏ
  timeout: 10000,

  // `withCredentials` chỉ định có thực hiện các request cross-site Access-Control sử dụng credential hay không
  withCredentials: false, // mặc định là false

  // `responseType` chỉ định kiểu dữ liệu mà server sẽ trả về
  // có thể là 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `xsrfCookieName` là tên của cookie được sử dụng như giá trị của xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // mặc định là 'XSRF-TOKEN'

  // `xsrfHeaderName` là tên của header mang giá trị của xsrf token
  xsrfHeaderName: 'X-XSRF-TOKEN', // mặc định là 'X-XSRF-TOKEN'

  // `onUploadProgress` cho phép xử lý quá trình upload
  onUploadProgress: function (progressEvent) {
    // Thực hiện việc thao tác với sự kiện progress
  },

  // `onDownloadProgress` cho phép xử lý quá trình download
  onDownloadProgress: function (progressEvent) {
    // Thực hiện việc thao tác với sự kiện progress
  },

  // `maxContentLength` chỉ định độ dài tối đa mà response được trả về
  // maxContentLength: 2000,

  // `validateStatus` chỉ định việc xử lý hay từ chối promise với HTTP response status được đưa ra
  // validateStatus: function (status) {
  //   return status >= 200 && status < 300; // trả về true hay null hay undefined thì sẽ xử lý, không thì sẽ từ chối
  // },

  // `cancelToken` chỉ định một cancel token được dùng để hủy request
  // cancelToken: new CancelToken(function (cancel) {
  // })
}

export default devConfig