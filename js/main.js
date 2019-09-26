$(() => {
  $('#stopButton').click(() => {
    console.log('stop button clicked')
    clearLights()
    $('#stopLight').css({ backgroundColor: 'red' })
  })

  $('#slowButton').click(() => {
    clearLights()
    $('#slowLight').css({ backgroundColor: 'yellow' })
  })

  $('#goButton').click(() => {
    clearLights()
    $('#goLight').css({ backgroundColor: 'green' })
  })

  function clearLights () {
    $('.bulb').css({ backgroundColor: 'black' })
  }
})
