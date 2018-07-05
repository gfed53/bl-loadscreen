$(() => {
  console.log('Hello World!');

  // Testing
  const $h1 = $('#text--main');
  $h1.html(breakIntoSpans($h1));

});

// Grab text of passed $el, and return text where each letter is in its own <span>
// ie: <h1>Hi</h1> -> <h1><span>H</span><span>i</span></h1>
function breakIntoSpans($el){
  console.log('$el',$el);
  const innerText = $el.text();
  console.log('innerText',innerText);

  return innerText
  .split('')
  .map(char => `<span>${char}</span>`)
  .join('');

  // console.log('result',result);


}