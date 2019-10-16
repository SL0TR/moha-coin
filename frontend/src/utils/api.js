import axios from "axios";
const api = `http://localhost:4000/api`;
// const api = `https://moha-coin.herokuapp.com/api`;
const blockChainUrl = `${api}/blockchain`;

export default {
  blockChain() {
    return {
      // getOne: ({ id }) => axios.get(`${url}/${id}`),
      getAll: () => axios.get(blockChainUrl),
      // update: (toUpdate) =>  axios.put(url,toUpdate),
      create: toCreate => axios.post(blockChainUrl, toCreate)
      // delete: ({ id }) =>  axios.delete(`${url}/${id}`)
    };
  }
};
