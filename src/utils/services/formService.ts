import { FormDataType } from '../../context/FormContext';

export const postData = async (data: FormDataType) => {
  const rawResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    body: JSON.stringify({
      ...data
    })
  });
  return await rawResponse.json();
};
