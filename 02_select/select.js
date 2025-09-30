const form = document.getElementById('testForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const product = document.getElementById('products').value;
  const resource = document.getElementById('resources').value;
  const plan = document.querySelector('input[name="plan"]:checked')?.value || 'None';
  const features = Array.from(document.querySelectorAll('input[name="feature"]:checked')).map(f => f.value);
  const username = document.getElementById('username').value;
  const comments = document.getElementById('comments').value;

  output.textContent = `Selected Product: ${product || 'None'}, Resource: ${resource || 'None'}, Plan: ${plan}, Features: ${features.join(', ') || 'None'}, Username: ${username}, Comments: ${comments}`;
});
