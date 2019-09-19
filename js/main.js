$(() => {
  $('#stopButton').click(() => {
    console.log('stop button clicked')
    reset()
    $('#stopLight').css({ backgroundColor: 'red' })
  })

  $('#slowButton').click(() => {
    reset()
    $('#slowLight').css({ backgroundColor: 'yellow' })
  })

  $('#goButton').click(() => {
    reset()
    $('#goLight').css({ backgroundColor: 'green' })
  })

  function reset () {
    $('.bulb').css({ backgroundColor: '#111' })
  }
})
