import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

async function ServiceGet(physicalAssteClassID: number) {
  try {
    const resp = await instanceAxios.get(
      `www.aaaaa/${physicalAssteClassID}`
    )
    return resp.data.result;
  } catch (e) {
    throw e;
  }
}

export { ServiceGet }