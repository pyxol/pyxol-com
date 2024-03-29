 
// Following code is a zoomable Mandelbrot. 
// Of course, you want to click on an interesting area 
// with contrast and more colors to zoom in.
 
double x, y, zr, zi, zr2, zi2, cr, ci, n;
double zmx1, zmx2, zmy1, zmy2, f, di, dj;
double fn1, fn2, fn3, re, gr, bl, xt, yt, j;
boolean animating = false;
 
void setup() {
  size(500, 500);
  di = 0;
  dj = 0;
  f = 10;
  fn1 = random(20); 
  fn2 = random(20); 
  fn3 = random(20);
  zmx1 = int(width / 4);
  zmx2 = 2;
  zmy1 = int(height / 4);
  zmy2 = 2;
}
 
void draw() {
  animating = true;
  
  background(200);
  
  for(double i = 0; i < width; i++) {
    x =  (i +  di)/ zmx1 - zmx2;
    for ( j = 0; j <= height; j++) {
      y = zmy2 - (j + dj) / zmy1;
      zr = 0;
      zi = 0;
      zr2 = 0; 
      zi2 = 0; 
      cr = x;   
      ci = y;  
      n = 1;
      while (n < 200 && (zr2 + zi2) < 4) {
        zi2 = zi * zi;
        zr2 = zr * zr;
        zi = 2 * zi * zr + ci;
        zr = zr2 - zi2 + cr;
        n++;
      }  
      re = (n * fn1) % 255;
      gr = (n * fn2) % 255;
      bl = (n * fn3) % 255;
      stroke((float)re, (float)gr, (float)bl); 
      point((float)i, (float)j);
    }
  }
  
  animating = false;
  
  if(frameCount == 5) { save("preview.png"); }
  
  noLoop();
}

void mouseDragged() {
  if(animating) {
    return;
  }
  
  int cx = (pmouseX - mouseX);
  int cy = (pmouseY - mouseY);
  
  di += cx;
  dj += cy;
  
  loop();
}

void mouseWheel(MouseEvent e) {
  if(animating) {
    return;
  }
  
  float amt = e.getCount();
  
  // negative is zoom in
  if(amt < 0) {
    zoomIn();
  } else if(amt > 0) {
    zoomOut();
  }
}

void zoomIn() {
  if(animating) {
    return;
  }
  
  // zoom in
  xt = mouseX;
  yt = mouseY;
  di = di + xt - float(width / 2);
  dj = dj + yt - float(height / 2);
  zmx1 = zmx1 * f;
  zmx2 = zmx2 * (1 / f);
  zmy1 = zmy1 * f;
  zmy2 = zmy2 * (1 / f);
  di = di * f;
  dj = dj * f;
  j = 0;
  
  loop();
}

void zoomOut() {
  if(animating) {
    return;
  }
  
  // zoom out
  xt = mouseX;
  yt = mouseY;
  di = di - xt - float(width / 2);
  dj = dj - yt - float(height / 2);
  zmx1 = zmx1 / f;
  zmx2 = zmx2 / (1 / f);
  zmy1 = zmy1 / f;
  zmy2 = zmy2 / (1 / f);
  di = di / f;
  dj = dj / f;
  j = 0;
  
  loop();
}