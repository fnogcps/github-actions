const missingAngle = (x, y) => 
    ((x + y) == 90 ? "right" : ((x + y) < 90 ? "obtuse" : "acute"))
