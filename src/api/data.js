import axios from 'axios'
export const getTableData = (page, size) => {
  return axios.request({
    url: 'http://localhost:5000/api/v1.0/devices/1/testcases',
    method: 'get',
    params: {
      "per_page": size,
      "page": page,
    },
    auth: {
      username: 'aq',
      password: 111111
    }
  })
}
// 此接口用于调用user list 
export const getUserList = (page, size) => {
  return axios.request({
    url: 'http://localhost:5000/api/v1.0/users',
    method: 'get',
    params: {
      "per_page": size,
      "page": page,
    },
    auth: {
      username: 'aq',
      password: 111111
    }
  })
}
//此接口用户新增一个用户
export const addUser = (username, password, email, roleid) => {
  return axios.request({
    url: 'http://localhost:5000/api/v1.0/users',
    method: 'post',
    data: {
      "username": username,
      "password": password,
      "email": email,
      "roleid": roleid,
    },
    auth: {
      username: 'aq',
      password: 111111
    }
  })
}
//此接口用于查询指定的用户
export const searchUser = (userid, username) => {
  return axios.request({
    url: 'http://localhost:5000/api/v1.0/users/' + userid,
    method: 'get',
    auth: {
      username: 'aq',
      password: 111111
    }
  })
}
//通过roleid查询用户
export const roleidSearchUser = (roleid) => {
  return axios.request({
    url: 'http://localhost:5000/api/v1.0/roles/' +roleid +'/users',
    method: 'get',
    auth: {
      username:'aq',
      password:111111
    }
  })
}
//获取用户名下的所有设备(旧版)
// export const devices = (page, size) => {
//   return axios.request({
//     url: 'http://localhost:5000/api/v1.0/users/1/devices',
//     method: 'get',
//     params: {
//       "per_page": size,
//       "page": page,
//     },
//     auth: {
//       username:'aq',
//       password:111111
//     }
//   })
// }
//获取用户名下的所有设备
export const devices = (page, size) => {
  return axios.request({
    url: 'http://0.0.0.0:7300/mock/5bfd0f3647387e76d7fe30de/test/devices',
    method: 'get',
    params: {
      "per_page": size,
      "page": page,
    },
    auth: {
      username:'aq',
      password:111111
    }
  })
}
// 获取项目名列表
export const getProjectId = (page, size) => {
  return axios.request({
    url: 'http://0.0.0.0:7300/mock/5bfd0f3647387e76d7fe30de/test/getProjectId',
    method: 'get',
  })
}
// 获取该项目下设备列表
export const getProjectDevices = (projectid) => {
  return axios.request({
    url: 'http://0.0.0.0:7300/mock/5bfd0f3647387e76d7fe30de/test/getProjectDevice',
    method: 'get',
    params: {
      "projectid": projectid,
    },
  })
}
// 设备运行
export const runDevices = (runningParam) => {
  return axios.request({
    url: 'http://0.0.0.0:7300/mock/5bfd0f3647387e76d7fe30de/test/running',
    method: 'get',
    params: {
      "runningParam": runningParam,
    },
  })
}