# dragPaint
drag, rotate pictures using AngularJS

Pictures by Ala Leresteux http://www.alaleresteux.com

Work around AngularJS with ngmousedown, ngmouseup, ngmousemove to drag a picture:
  mousedown sets a flag and initial position
  mousemove calculates and changes CSS values of "top" and "left"
  mouseup removes the flag
Bind 90deg right rotation to double-click event.

Ameliorations: 
  adding a pop up (modal?) with instructions
  adding touch events (ngtouch) for mobile version
  (?) implementing boundaries
  (?) adding a grill to stick to
