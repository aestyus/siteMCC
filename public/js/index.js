let includes = document.getElementsByTagName('include');
      for (var i = 0; i < includes.length; i++) {
         let include = includes[i];
         load_file(includes[i].attributes.src.value, function(text) {
            include.insertAdjacentHTML('afterend', text);
            include.remove();
         });
      }
      function load_file(filename, callback) {
         fetch(filename).then(response => response.text()).then(text => callback(text));
      }
      
window.addEventListener('resize', function() {
   if (window.innerWidth < 300) {
      document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=400');
   } else {
      document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');
   }
});