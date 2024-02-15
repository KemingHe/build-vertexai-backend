const form = document.getElementById('api_form');
const response = document.getElementById('api_response');

form.addEventListener('submit', async (ev) => {

  ev.preventDefault();

  const fData = new FormData(form);

  const data = {
    projectId:  fData.get('projectId'),
    region:     fData.get('region'),
    modelId:    fData.get('modelId'),
    payload:    {
      uPrompt:  fData.get('uPrompt')
    }
  };

  const response = await fetch('/predict', {

    method:     'POST',
    body:       JSON.stringify(data),
    headers:    {
      'Content-Type': 'application/json'
    }
  });

  const finalResults = await response.json();

  api_response.innerHTML = JSON.stringify(finalResults);

});

