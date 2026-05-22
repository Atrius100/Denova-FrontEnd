import React from "react";

const themeBootstrap = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('denova-theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){d.classList.add('dark');}else{d.classList.remove('dark');}}catch(e){}})();`;

export default function Head() {
  return <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />;
}
