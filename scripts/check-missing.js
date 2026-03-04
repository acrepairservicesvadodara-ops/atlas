const fs=require('fs');
const path=require('path');
const all = fs.readFileSync(path.join(__dirname,'../atlasaircons-all-urls.txt'),'utf-8')
  .split(/\n/).map(u=>u.trim()).filter(Boolean)
  .map(u=>u.replace(/https?:\/\/(www\.)?atlasaircons\.com\//, ''))
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
const missing=all.filter(s=>!existing.has(s));
console.log('missing length',missing.length);
console.log('area',missing.filter(x=>x.startsWith('ac-service-in-')).length);
console.log('brand',missing.filter(x=>x.match(/-ac-service-center-/)).length);
console.log('fault',missing.filter(x=>x.startsWith('fault-codes/')).length);
console.log('install',missing.filter(x=>x.startsWith('ac-installation-')).length);
console.log('first 20',missing.slice(0,20));
