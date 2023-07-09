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
      
// function addViewportMetaTag() {
//    if (window.innerWidth < 400) {
//       var meta = document.createElement('meta');
//       meta.name = 'viewport';
//       meta.content = 'width=400px';
//       document.head.appendChild(meta);
//    }
// }
       