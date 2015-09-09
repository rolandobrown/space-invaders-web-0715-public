// Done. CrewMember should know their position
// Done. CrewMember should should return "Looking for a Rig" if they aren't assigned to a ship
// Done. CrewMember should return "had no effect" when the crew member tries to use their special ability

// Done. Ship with a crew should have it's warp drive set to "engaged" only when the pilot uses `engageWarpDrive`
// Done. Ship with a crew `docked` should return false for ships with a crew
// Done. Ship with a crew a crew member should return their ship when `currentShip` is called on them
// Done. Ship with a crew should charge its phasers when a gunner calls `chargePhasers`
// Done. Ship with a crew should cloak when a defender `setsInvisibility`

function CrewMember(position){
  this.position = position;
  this.currentShip = 'Looking for a Rig'; // No argument passed so CrewMember must be Looking for a Rig.
}

CrewMember.prototype.engageWarpDrive = function(){
  if (this.currentShip == 'Looking for a Rig') {
    return('had no effect');
  } else if(this.position == 'Pilot'){
    this.currentShip.warpDrive = 'engaged!'; // change warp drive
  }
};

CrewMember.prototype.setsInvisibility = function(){
  if (this.currentShip == 'Looking for a Rig') {
    return('had no effect');
  } else if(this.position == 'Defender'){
    this.currentShip.cloaked = true; // cloak when defender setsInvisibility
  }
};

CrewMember.prototype.chargePhasers = function(){
  if (this.currentShip == 'Looking for a Rig') {
    return('had no effect');
  } else if(this.position == 'Gunner'){
    this.currentShip.phasersCharge = 'charged!'; // charge phasers
  }
};
// 
// function CrewMember (position) {
//  this.position = position;
//  this.currentShip = 'Looking for a Rig'
// }
//
// CrewMember.prototype.engageWarpDrive = function(){
//  return 'had no effect'
// };
//
// CrewMember.prototype.setsInvisibility = function(){
//  return 'had no effect'
// };
//
// CrewMember.prototype.chargePhasers = function(){
//  return 'had no effect'
// };
