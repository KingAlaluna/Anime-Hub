let button1 = {
  width: 'auto',
  height: '70%',
  aspectRatio: '1/1',
  background: '#f30',
  margin: 'clamp(5px, 2vmin, 10px)',
};

let button2 = {
  width: 'clamp(150px, 70%, 200px)',
  height: 'clamp(35px, 5vh, 50px)',
  background: '#f30',
  margin: '2vmin',
};

let button3 = {
  width: '90%',
  height: 'clamp(35px, 7vh, 50px)',
  background: '#fff',
  margin: '2vmin auto',
};

let grid1 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: '1fr',
  justifyItems: 'center',
};

let grid2 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  justifyItems: 'center',
};

let grid3 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  justifyItems: 'center',
};

let position1 = {
  position: 'fixed',
  bottom: '0',
  left: '0',
  zIndex: '99',
};

let title1 = {
  background: 'var(--gradient-6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
};

let title2 = {
  background: 'var(--gradient-6), var(--gradient-3)',
  WebkitBackgroundClip: 'text, border-box',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text, border-box',
  color: 'transparent',
};

let title3 = {
  background: 'var(--gradient-19)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
};




//обводки 
let border1 = {
  borderBottom: '2px solid transparent',
  backgroundClip: 'padding-box, padding-box, border-box',
  backgroundOrigin: 'border-box',
};

let border2 = {
  borderBottom: '2px solid transparent',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'border-box',
};

let border3 = {
  borderTop: '2px solid transparent',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'border-box',
};

let border4 = {
  border: '2px solid transparent',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'border-box',
};

let border5 = {
  //border: '2px solid transparent',
  borderLeft: '2px solid transparent',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'border-box',
  //backgroundPosition: '0 0, 0 0',
};

let border6 = {
  border: '2px solid transparent',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'border-box',
  backgroundImage: 'linear-gradient(var(--color-fff), var(--color-fff)), var(--gradient-18)',
};

let border7 = {
  borderLeft: '2px solid transparent',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'border-box',
  backgroundImage: 'linear-gradient(var(--color-fff), var(--color-fff)), var(--gradient-18)',
};

let border8 = {
  borderBottom: '2px solid transparent',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'border-box',
  backgroundImage: 'linear-gradient(var(--color-fff), var(--color-fff)), var(--gradient-18)',
};

let border9 = {
  borderLeft: '2px solid transparent',
  backgroundClip: 'padding-box, border-box',
  backgroundOrigin: 'border-box',
  backgroundImage: 'var(--gradient-2), var(--gradient-18)',
};