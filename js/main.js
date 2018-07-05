$(() => {
  console.log('Hello World!');

  // Testing
  const $h1 = $('#text--main');
  $h1.html(breakIntoSpans($h1));

  setAnimationDelay($h1);

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

// Attach an 'animation-delay' property/value to each child in $el, where each child has an incremented delay value

function setAnimationDelay($el) {
  let delayVal = 0;
  const $children = $el.children('span');
  // console.log('children',children);

  $children.each((i,child) => {
    console.log('child',child);
    $(child).css('animation-delay', `${delayVal}ms`);
    delayVal += 100;
  });
}