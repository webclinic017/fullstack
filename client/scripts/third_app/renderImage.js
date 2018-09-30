function previewBase64(file, targetRes) {
  var reader = new FileReader();

  reader.onload = function(e) {
      var img = new Image();
      img.src = e.target.result;

      $(img).on('load', function (e) {
          targetRes.data=new Image();
          renderImage(targetRes.data, img, { maxWidth: 640, maxHeight: 640, quality: 0.5 });
      
      });
      
  };
  reader.readAsDataURL(file);
}

function renderImage (target, img, options) {
  options = options || {};
  var imgWidth = img.naturalWidth, imgHeight = img.naturalHeight,
      width = options.width, height = options.height,
      maxWidth = options.maxWidth, maxHeight = options.maxHeight,
      doSquash = !this.blob || this.blob.type === 'image/jpeg';
  if (width && !height) {
      height = (imgHeight * width / imgWidth) << 0;
  } else if (height && !width) {
      width = (imgWidth * height / imgHeight) << 0;
  } else {
      width = imgWidth;
      height = imgHeight;
  }
  
  if (maxWidth && width > maxWidth) {
      width = maxWidth;
      height = (imgHeight * width / imgWidth) << 0;
  }
  if (maxHeight && height > maxHeight) {
      height = maxHeight;
      width = (imgWidth * height / imgHeight) << 0;
  }
  var opt = { width : width, height : height };
  for (var k in options) opt[k] = options[k];

  target.src = renderImageToDataURL(img, opt);
}
function renderImageToDataURL (img, options) {
  var width = options.width, height = options.height;
  var canvas = document.createElement("canvas"); 
  var iw = img.naturalWidth, ih = img.naturalHeight;
  var ctx = canvas.getContext('2d');
  ctx.save();
  canvas.width = width;
  canvas.height = height;

  var d = 1024; // size of tiling canvas
  var tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = tmpCanvas.height = d;
  var tmpCtx = tmpCanvas.getContext('2d');
  var dw = Math.ceil(d * width / iw);
  var dh = Math.ceil(d * height / ih);
  var sy = 0;
  var dy = 0;
  
  while (sy < ih) {
      var sx = 0;
      var dx = 0;
      while (sx < iw) {
          tmpCtx.clearRect(0, 0, d, d);
          tmpCtx.drawImage(img, -sx, -sy);
          ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
          sx += d;
          dx += dw;
      }
      sy += d;
      dy += dh;
  }

  ctx.restore();
  tmpCanvas = tmpCtx = null;

  return canvas.toDataURL("image/jpeg", options.quality || 0.5);
}