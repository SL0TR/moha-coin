import axios from "axios";
const url = `http://localhost:4000`;
const blockChainUrl = `${url}/blockchain`;

export default {
  blockChain() {
    return {
      // getOne: ({ id }) => axios.get(`${url}/${id}`),
      getAll: () => axios.get(blockChainUrl),
      // update: (toUpdate) =>  axios.put(url,toUpdate),
      create: toCreate => axios.put(blockChainUrl, toCreate)
      // delete: ({ id }) =>  axios.delete(`${url}/${id}`)
    };
  }
};
