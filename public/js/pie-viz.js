function createPieChart() {

  //images
  var imgSrcs = ["/static/js/madonna-dynamo.jpg", "/static/js/sketch-connector.jpg", "/static/js/elephant-maverick.jpg", "/static/js/duck-navigator.jpg", "static/js/hand-mentor.jpg"];
  var imgPromises = imgSrcs.map(function(source) {
    return createImg(source)
  })

  //returns a promise
  function createImg(src) {
    return new Promise(function(resolve, reject) {
      var image = new Image();
      image.onload = (function() {
        resolve(image)
      });
      image.onerror = (function() {
        reject(image)
      });
      image.src = src;
    })
  }

  Chart.defaults.global.defaultFontFamily = "EliotReg";

  //when all images are ready
  Promise.all(imgPromises)
    .then(function(loadedimgs) {

      var carouselbox = document.getElementById("carouselbox");
      var chartDiv = document.getElementById("chart");
      chartDiv.className = "contain"
      // var divContain = document.createElement("div");
      // divContain.className = "contain"
      // carouselbox.appendChild(divContain)
      var canvas = document.createElement("canvas");
      canvas.className = "pie"
      chartDiv.appendChild(canvas)
      var ctx = canvas.getContext('2d');

      // Create canvas
      function getImagePattern(img) {
        var imageCanvas = document.createElement("canvas");
        var imageContext = imageCanvas.getContext("2d");
        imageCanvas.width = ctx.canvas.width;
        imageCanvas.height = ctx.canvas.height;
        imageContext.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
        return ctx.createPattern(imageCanvas, 'no-repeat');
      }

      // Create pattern
      function getBackgroundColor() {
        return loadedimgs.map(getImagePattern)
      }

      var pieChart = new Chart(ctx,{
        type: 'pie',
        data: {
          datasets: [{
            data: [ 300, 60, 140, 200, 100],
            backgroundColor: getBackgroundColor()
          }]
        },
        options: {
          onResize: function(chart) {
            chart.data.datasets[0].backgroundColor = getBackgroundColor()
          },
          tooltips: {
            enabled: false
          }
        }
      });

    })



};