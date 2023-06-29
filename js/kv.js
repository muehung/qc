////////////////////////////////////
/// REQUEST INTERVAL ANG TIMEOUT ///
////////////////////////////////////

// https://gist.github.com/joelambert/1002116

window.requestAnimFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(/* function */ callback, /* DOMElement */ element) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
  
  window.requestTimeout = function(fn, delay) {
    if (
      !window.requestAnimationFrame &&
      !window.webkitRequestAnimationFrame &&
      !(
        window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame
      ) && // Firefox 5 ships without cancel support
      !window.oRequestAnimationFrame &&
      !window.msRequestAnimationFrame
    )
      return window.setTimeout(fn, delay);
  
    let start = new Date().getTime(),
      handle = new Object();
  
    function loop() {
      let current = new Date().getTime(),
        delta = current - start;
  
      delta >= delay ? fn.call() : (handle.value = requestAnimFrame(loop));
    }
  
    handle.value = requestAnimFrame(loop);
    return handle;
  };
  
  window.requestInterval = function(fn, delay) {
    let requestAnimFrame = (function() {
        return (
          window.requestAnimationFrame ||
          function(callback, element) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })(),
      start = new Date().getTime(),
      handle = {};
    function loop() {
      handle.value = requestAnimFrame(loop);
      let current = new Date().getTime(),
        delta = current - start;
      if (delta >= delay) {
        fn.call();
        start = new Date().getTime();
      }
    }
    handle.value = requestAnimFrame(loop);
    return handle;
  };
  
  ///////////////////////
  /// BACKGROUND PART ///
  ///////////////////////
  
  function triangleBackground() {
    let canvas = document.createElement("canvas");
    let h;
    let w;
    let setSize = function() {
    //   let headerHeight = document.querySelector(".fusion-header-wrapper")
    //     .offsetHeight;
      h = canvas.height = window.innerHeight - (window.innerHeight / 2.5);
      w = canvas.width = window.innerWidth;
    };
    setSize();
  
    // document.getElementById("trianglesContent").style.height = w;
    canvas.id = "triangleCanvas";
  
    let triangleDiv = document.getElementById("triangles");
    triangleDiv.appendChild(canvas);
  
    let triangleContent = document.getElementById("trianglesContent");
  
    let context = canvas.getContext("2d");
  
    // variables!
  
    let variationAmount = 0.9; // how much variation in points in grid
    let scale = w >= h ? w / 15 : h / 15; // size of triangles
    let hueUpLimit = 240;
    let hueDownLimit = 300;
    let hue = -85; // hue in the beginning
    let saturation = 20; // saturation
    let brightness = 12 + 20 * w / 1000; // brightness
    let dodge = scale * 4; // width of the mousebubble
    let dodgeP = 0.3; // height? of the mousebubble
    let escapeOnOff = 0; //mousebubble escaping if != 0
  
    variation = scale * variationAmount;
    let mouseFastX = 0;
    let mouseFastY = 1000;
    let mouseX = 0;
    let mouseY = 1000;
    let triangles = [];
    let mousePosition;
    let mouseGrid = [];
    let smoothGrid = [];
    let dX;
    let dY;
    let grid = [];
    let row = [];
  
    let columns = Math.round(1.2 * w / scale);
    let rows = Math.round(1.2 * h / scale);
  
    // Create point grid in that is a little bit randomized
  
    let makeGrid = function() {
      grid = [];
      row = [];
      for (i = -3 - columns / 2; i < columns / 2 + 2; i += 1) {
        for (j = -3 - rows / 2; j < rows / 2 + 2; j++) {
          x = i * scale + scale / 2 + Math.random() * variation;
          y = j * scale + Math.random() * variation;
          row.push([x, y]);
        }
        grid.push(row);
        row = [];
      }
    };
  
    let makeTriangles = function(grid) {
      triangles = [];
      for (rowD = 0; rowD < grid.length - 1; rowD += 1) {
        for (j = 0; j < grid[rowD].length - 1; j += 1) {
          let p1 = grid[rowD][j];
          let p2 = grid[rowD + 1][j];
          let p3 = grid[rowD][j + 1];
          triangles.push([p1, p2, p3]);
        }
        for (j = 0; j < grid[rowD].length - 1; j += 1) {
          let p1 = grid[rowD][j + 1];
          let p2 = grid[rowD + 1][j + 1];
          let p3 = grid[rowD + 1][j];
          triangles.push([p1, p2, p3]);
        }
      }
    };
  
    let makeMouseGrid = function() {
      mouseGrid = deepClone(grid);
      for (i = 0; i < mouseGrid.length - 1; i++) {
        //mouseGrid[i] = oldGrid[i];
        for (j = 0; j < mouseGrid[i].length - 1; j++) {
          dX = mouseGrid[i][j][0] - mouseX; // when - h is on the right
          dY = mouseGrid[i][j][1] - mouseY; // when - h is below
          dD = Math.sqrt(dX * dX + dY * dY);
          //
          if (dD < dodge) {
            //the length of the new vector is 50 - .5 * dD
  
            let dodgeLength = dodge / (1 / dodgeP) - dodgeP * dD;
  
            //divide the length in the same proportion to the components of the new vector
  
            dY == 0 ? (dY = 0.001) : dY;
            dX == 0 ? (dX = 0.001) : dX;
            let xAngle = dD / dX;
            let dDx = dodgeLength / xAngle;
            let yAngle = dD / dY;
            let dDy = dodgeLength / yAngle;
  
            mouseGrid[i][j][0] += dDx;
            mouseGrid[i][j][1] += dDy;
  
            //lisää uusi vektori pisteelle
  
            // (-100 < dX  && dX < 0) ? console.log('yes') : console.log('no')
            // i === 12 && j === 10 ? console.log(dX, dDx) : true;
          }
        }
      }
    };
  
    let makeSmooth = function() {
      let smoothGrid = [];
      for (let i = 0; i < grid.length - 1; i++) {
        for (let j = 0; j < grid.length[i] - 1; j++) {
          for (let k = 0; k < grid.length[j] - 1; k++) {
            let dD = grid[i][j][k] - mouseGrid[i][j][k];
            smoothGrid[i][j][k] = mouseGrid[i][j][k];
          }
        }
      }
    };
  
    function deepClone(arr) {
      let len = arr.length;
      let newArr = new Array(len);
      for (let i = 0; i < len; i++) {
        if (Array.isArray(arr[i])) {
          newArr[i] = deepClone(arr[i]);
        } else {
          newArr[i] = arr[i];
        }
      }
      return newArr;
    }
  
    // create random variation for every triangle
  
    let randomValues = [];
    let randoms = function() {
      randomValues = [];
      for (i = 0; i < triangles.length; i++) {
        randomValues[i] = Math.random();
      }
    };
  
    // Function for calculating value based on distance from origo
  
    let a = function(array) {
      let sum = 0;
      for (i = 0; i < array.length; i++) {
        sum += Math.abs(array[i]);
      }
      return sum;
    };
  
    //Function for drawing triangles
  
    let triangle = function(p, rand) {
      // the triangle
      context.beginPath();
      context.moveTo(p[0][0] + w / 2, p[0][1] + h / 2);
      context.lineTo(p[1][0] + w / 2, p[1][1] + h / 2);
      context.lineTo(p[2][0] + w / 2, p[2][1] + h / 2);
      context.closePath();
  
      let randomHue = rand * 7 + hue;
      let value = a([p[0][0], p[0][1], p[1][0], p[1][1], p[2][0], p[2][1]]);
      value += 1500;
      value = value / brightness;
      value = 100 - value;
      let color = "hsl(" + randomHue + ", " + saturation + "%, " + value + "%)";
  
      // the outline
      context.strokeStyle = color;
      context.stroke();
  
      // the fill color
      context.fillStyle = color;
      context.fill();
    };
  
    // Function that maps this triangle array and draws them out
    let hueDirection = "up";
    let draw = function() {
      let i = 0;
      // hueDirection == "up" ? hue++ : hue--;
      // hue == hueUpLimit ? (hueDirection = "down") : true;
      // hue == hueDownLimit ? (hueDirection = "up") : true;
      //console.log(hue, hueDirection);
      // makeTriangles(grid)
      while (i < triangles.length) {
        triangle(triangles[i], randomValues[i]);
        i++;
      }
    };
  
    let init = function() {
      makeGrid();
      makeTriangles(grid);
      randoms();
      draw();
    };
  
    init();
  
    let update = function() {
      makeMouseGrid(grid);
      makeTriangles(mouseGrid);
      let dMouseX = mouseFastX - mouseX;
      let dMouseY = mouseFastY - mouseY;
      mouseX += dMouseX / 8;
      mouseY += dMouseY / 8;
      draw();
      mouseFastY -= (20 - 100 * Math.random()) * escapeOnOff;
    };
  
    function getMousePos(canvas, evt) {
      let rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }
    canvas.addEventListener(
      "mousemove",
      function(evt) {
        let mousePos = getMousePos(canvas, evt);
        mouseFastX = mousePos.x - w / 2;
        mouseFastY = mousePos.y - h / 2;
      },
      false
    );
  
    //setInterval(update, 1000 / 15);
    requestInterval(update, 10);
  
    function debounce(func, wait, immediate) {
      let timeout;
      return function() {
        let context = this,
          args = arguments;
        let later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
  
    let resizeCanvas = debounce(function() {
      setSize();
      scale = w >= h ? w / 15 : h / 15;
      brightness = 30 + 25 * w / 1000; // brightness
      dodge = scale * 3; // width of the mousebubble
      variation = scale * variationAmount;
      columns = Math.round(1.2 * w / scale);
      rows = Math.round(1.2 * h / scale);
  
      makeGrid();
      makeTriangles(grid);
      randoms();
      draw();
  
      // console.log(w, columns, h, rows )
      //console.table(grid)
    }, 250);
  
    window.addEventListener("resize", resizeCanvas);
  }
  triangleBackground();
  
  ///////////////////
  /// TYPING PART ///
  ///////////////////
  
  function animatedTyping() {
    window.onload = function() {
      let typeSpeed = 10;
      let iCounter = 0;
      let jCounter = 0;
  
      function type(string, elementId) {
        let element = document.getElementById(elementId);
        element.classList.add("cursor");
        if (string[iCounter] !== undefined) {
          element.innerHTML += string[iCounter];
          let randomTimeOut = 50 + Math.random() * typeSpeed;
          requestTimeout(function() {
            type(string, elementId);
          }, randomTimeOut);
          iCounter += 1;
        } else {
          iCounter = 0;
          requestTimeout(function() {
            element.classList.remove("cursor");
            nextTyping();
          }, 1000);
        }
      }
  
      function remove(chars, elementId) {
        let element = document.getElementById(elementId);
        element.classList.add("cursor");
        if (chars > 0) {
          element.innerHTML = element.innerHTML.slice(0, -1);
          let randomTimeOut = Math.random() * typeSpeed;
          requestTimeout(function() {
            remove(chars - 1, elementId);
          }, randomTimeOut);
        } else {
          requestTimeout(function() {
            element.classList.remove("cursor");
            nextTyping();
          }, 500);
        }
      }
  
      function goTo(arrayPos, wait) {
        jCounter = arrayPos - 1;
        nextTyping();
        jCounter -= 1;
      }
  
      function goBack(arrayPos, wait) {
        jCounter = jCounter - arrayPos;
        nextTyping();
        jCounter -= 1;
      }
  
      function removeAll(number, elementId) {
        let element = document.getElementById(elementId);
        let lenght = element.innerHTML.length;
        remove(lenght, elementId);
      }
  
      function wait(time, elementId) {
        let element = document.getElementById(elementId);
        element.classList.add("cursor");
        requestTimeout(function() {
            element.classList.remove("cursor");
            nextTyping();
          }, time);
      }
  
      let typeQue = [
        [type, "哈囉！ ", "heading"],
        [wait, 100, "heading"],
        // [remove, 1, "heading"],
        // [type, ", mukava kun tulit käymään!", "heading"],
        // [removeAll, 19, "heading"],
        [type, "我是洪萱容｜CHERYL HUNG", "heading"],
        [removeAll, 10, "subheading"],
        [type, "我在網站視覺設計著墨數年時光", "subheading"],
        [removeAll, 10, "subheading"],
        [type, "對前端程式很有興趣", "subheading"],
        [removeAll, 10, "subheading"],
        [type, "讓視覺與程式的結合", "subheading"],
        [removeAll, 10, "subheading"],
        [type, "創造專案價值、解決需求痛點！", "subheading"],
        [wait, 1000, "heading"],
        [removeAll, 0, "subheading"],
        // [goBack, 10, "heading"]
        //[goTo, 6, 400] //TODO: make it goto exact or go up -3
        // TODO: add function for wait some time
      ];
  
      function nextTyping() {
        if (typeQue[jCounter] !== undefined) {
          typeQue[jCounter][0](typeQue[jCounter][1], typeQue[jCounter][2]);
        }
        jCounter += 1;
      }
      nextTyping();
    };
  }
  
  animatedTyping();
  
  ////////////////////////
  /// SCROLL DOWN PART ///
  ////////////////////////
  
  function landingScroller() {
    function scrollDown(event) {
      event.preventDefault(event);
      let triangles = document.getElementById("triangles");
      window.scroll({
        top: triangles.scrollHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  
    // let scrollDownElement = document.getElementById("scrolldowntocontent");
    // scrollDownElement.addEventListener("click", scrollDown);
  }
  
  landingScroller();
  