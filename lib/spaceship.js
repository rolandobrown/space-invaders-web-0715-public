function Spaceship(name, crew, phasers, shields){
  this.name = name;
  this.crew = crew;
    for (var x = 0; x < crew.length; x++) {
      crew[x].currentShip = this;
    }
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.docked = true;
  if (this.crew.length > 0) this.docked = false;
  this.phasersCharge = 'uncharged';
}

// Done. Spaceship should know it's own name
// Done. Spaceship should have the correct number of phasers (5)
// Done. Spaceship should have it's cloaking set to false by default
// Done. Spaceship should have the correct layer of shields (4)
// Done. Spaceship should have it's warp drive set to "disengaged" by default
// Done. Spaceship should be docked if it has no crew
// Done. Spaceship should have it's `phasers` charge set to "uncharged" by default

// function Spaceship (name, crew, num_phasers, num_shields) {
//  this.name = name;
//  this.phasers = num_phasers;
//  this.shields = num_shields;
//  this.cloaked = false;
//  this.crew = crew;
//  this.warpDrive = 'disengaged';
//  this.phasersCharge = 'uncharged';
//  this.docked = crew.length === 0 ? true : false;
// };
