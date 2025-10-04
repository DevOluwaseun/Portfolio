// export async function handler() {
//   try {
//     const res = await fetch(
//       'https://dev.to/api/articles?username=devoluwaseun',
//     );
//     const data = await res.json();

//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (err) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: err.message }),
//     };
//   }
// }

export async function handler() {
  try {
    const res = await fetch(
      'https://dev.to/api/articles?username=devoluwaseun',
    );

    if (!res.ok) {
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: res.statusText }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (err) {
    console.error('fetchPosts error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
}
