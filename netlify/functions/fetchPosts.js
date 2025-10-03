import fetch from 'node-fetch';

export async function handler() {
  try {
    const res = await fetch(
      'https://dev.to/api/articles?username=devoluwaseun',
    );
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
