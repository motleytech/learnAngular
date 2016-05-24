function range(lim) {
  return Array.apply(null, Array(lim)).map(function (_, i) {return i;});
}

var buttonsAndMsgs = range(10).map(function (idx) {
  return ["Step " + idx + '.', "<h1>Step "+ idx + "</h1><p>This is info about step " + idx + ".</p>"]
})
// [
//   ['Step 1', "<h1>Step 1</h1><p>This is info about step 1.</p>"],
//   ['Step 2', "<h1>Step 2</h1><p>This is info about step 2.</p>"]
// ]

function renderWidget() {
  var labels = buttonsAndMsgs.map(function (labelmsg) { return labelmsg[0] })
  var buttons = labels.map(function (label, idx) {
    return $('<input type="button" id="stepBtn' + idx + '" value="' + label + '"/>')
  } )

  $('.buttonsdiv').append(buttons)
  buttons.map(function (btn, idx) {
    btn.click(function () {
      processButtonClick(idx)
    })
  })
}

function processButtonClick(idx) {
  console.log('clicked on ', idx)
  showStep(idx)
}

function showStep(step) {
  var msg = buttonsAndMsgs[step][1]
  $('.stepsdiv').html(msg)
}

function onReady() {
  renderWidget()
}

$().ready(onReady)
// <input type="button" id="btnStep1" value="Step1">
// <input type="button" id="btnStep2" value="Step2">
// <div id="step1" class="panel">
//   <div class="panel-body">
//     <h1>Step 1</h1>
//     <p>
//       This is info about Step 1.
//     </p>
//   </div>
// </div>
// <div class="panel" id="step2">
//   <div class="panel-body">
//     <h1>Step 2</h1>
//     <p>
//       Here is info about Step 2.
//     </p>
//   </div>
// </div>
