function start() {
  
    ////MADE FOR VERSION 0.14.0 SCRIPT SYSTEM////
  
    ////CONFIG////
  
    var link = "https://helltech.mywire.org"; // link to app webpage
    var title = "Hellcord"; // title shown in navbar
    var id = "https://hellscaped-cw-plugins.netlify.app/hellcord.js"; // set this to the url location of your script
    
    ////SCRIPT////
    
    var ExampleLink = document.createElement("a");
    var ExampleIFrame = document.createElement("iframe");
    
    ExampleIFrame.style = "display: none;";
    ExampleIFrame.className = "app "+id;
    ExampleIFrame.id = id;
    ExampleIFrame.src = link;
    
    ExampleLink.href = "javascript:openapp('"+ ExampleIFrame.id +"','" + link + "');" ;
    ExampleLink.className = id; 
    ExampleLink.addEventListener('dblclick', (e) => {
      uninstallApp(ExampleIFrame.id);
    });
    var Logo = "https://helltech.mywire.org/assets/hellcord-nocolor.png";
    ExampleLink.innerHTML = title + '</span><img src="'+Logo+'" class="appicon" alt="icon">';
    var styler = document.createElement("style");
    // make sure to center it
    styler.innerHTML = ".appicon {width: 32px; height: 32px; margin-right: 5px; margin-left: 5px; vertical-align: middle;}";
    document.head.appendChild(styler);
    ExampleLink.addEventListener('dblclick', (e) => {
      uninstallApp(ExampleIFrame.id);
    });
    ExampleLink.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    closeApp(ExampleIFrame.id);
  });
    
    document.getElementById("navbar").appendChild(ExampleLink);
    document.getElementById("main").appendChild(ExampleIFrame);
  }
  
  start();
