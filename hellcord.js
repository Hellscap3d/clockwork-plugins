function start() {
  
    ////MADE FOR VERSION 0.12.0 SCRIPT SYSTEM////
  
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
    ExampleLink.innerHTML = '<span class="appname">'+title+' </span><img src="'+Logo+'" class="appicon" alt="icon">';
    var styler = document.createElement("style");
    styler.innerHTML = ".appicon {width: 20px; height: 20px; margin-right: 5px;} .appname {font-size: 14px; font-weight: 500;}";
    document.head.appendChild(styler);
    
    document.getElementById("navbar").appendChild(ExampleLink);
    document.getElementById("main").appendChild(ExampleIFrame);
  }
  
  start();
