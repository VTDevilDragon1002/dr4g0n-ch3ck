const terminal = document.getElementById('terminalText');
const lines = [
  '$ dr4g0n-ch3ck --scan password',
  '[+] Checking length, entropy, and patterns...',
  '[+] Estimating online and offline crack time...',
  '[+] Generating security recommendations...',
  '[✓] Professional report ready.'
];
let i=0,j=0,out='';
function type(){
  if(!terminal) return;
  if(i<lines.length){
    if(j<lines[i].length){out+=lines[i][j++];terminal.textContent=out+'█';setTimeout(type,30)}
    else{out+='\n';i++;j=0;setTimeout(type,500)}
  } else terminal.textContent=out;
}
type();
