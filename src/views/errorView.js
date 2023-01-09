export function renderError(response) {
  console.log(
    'Looks like there was a problem. Status Code: ' + response.status,
  );
}

export function renderStatus(err) {
  console.log('Fetch Error :-S', err);
}
