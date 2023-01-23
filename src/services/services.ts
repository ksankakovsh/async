import { BASE_URL } from '../config';
export const createCar = async ({ name, color }: { name: string; color: string }) => {
  const response = await fetch(`${BASE_URL}/garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      color
    })
  });
  const { data } = await response.json();
  return data;
};
export const getCars = async (page?: number, limit?: number) => {
  const response = await fetch(`${BASE_URL}/garage?_page=${page}&_limit=${limit}`);
  return {
    items: response.json(),
    count: response.headers.get('X-total-Count')
  };
};
export const getCar = async (id: number) => (await fetch(`${BASE_URL}/garage/${id}`)).json();
export const deleteCar = async (id: number) =>
  (
    await fetch(`${BASE_URL}/garage/${id}`, {
      method: 'DELETE'
    })
  ).json();
export const updateCar = async (id: number, body: string | number) => {
  // TODO: уточніть параметр body
  const response = await fetch(`${BASE_URL}/garage/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const { data } = await response.json();
  return data;
};
export const start = async (id: number) =>
  await (await fetch(`${BASE_URL}/engine?id=${id}&status=started`)).json();
export const stop = async (id: number) =>
  await (await fetch(`${BASE_URL}/engine?id=${id}&status=stopped`)).json();
