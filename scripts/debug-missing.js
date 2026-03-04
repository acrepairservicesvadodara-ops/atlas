const fs=require('fs');
const path=require('path');
function getMissingSlugs(){
  const all = fs.readFileSync(path.join(__dirname,'../atlasaircons-all-urls.txt'),'utf-8')
    .split(/\n/).map(u=>u.trim()).filter(Boolean)
    .map(u=>u.replace(/https?:\/\/(www\.)?atlasaircons\.com\//,''))
    .map(u=>u.replace(/\/+$/,''))
    .filter(s=>/^[a-z0-9\-/]+$/.test(s));
  const existing=new Set();
  function walk(dir){
    for(const n of fs.readdirSync(dir)){
      const p=path.join(dir,n);
      if(fs.statSync(p).isDirectory()){
        existing.add(path.relative(path.join(process.cwd(),'app'),p));
        walk(p);
      }
    }
  }
  walk(path.join(process.cwd(),'app'));
  return all.filter(s=>!existing.has(s));
}
const m=getMissingSlugs();
console.log('total missing',m.length);
console.log('first area index',m.findIndex(s=>s.startsWith('ac-service-in-')));
console.log('first 100 counts area,brand',
  m.slice(0,100).filter(s=>s.startsWith('ac-service-in-')).length,
  m.slice(0,100).filter(s=>s.match(/-ac-service-center-/)).length
);
