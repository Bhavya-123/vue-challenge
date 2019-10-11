const estimate = (x, y) => { return x * y }

const estimator = new Vue({
  el: '#estimator',
  data: {
   
    firstNumber: 5,
    secondNumber: 3
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `Total Number of items: ${estimate(i, j)}.`
    }
  }
})