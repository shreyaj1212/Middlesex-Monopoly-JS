class RailRoadMonopoly implements Monopoly{
  constructor(propertiesIncluded) {
    this.propertiesIncluded = propertiesIncluded;
  }

  updateRents() {
    for(i=0;i<propertiesIncluded.length;i++) {
      var p = propertiesIncluded[i];
      var pOwner = p.getOwner();
      var count = 0;
      for(j=0;j<propertiesIncluded.length;j++) {
        var p2 = propertiesIncluded[j];
        if(p2.getOwner().equals(pOwner)){
          count=count+1;
        }
      }
      if(count==1) {
        p.setRent(1_RR_RENT);
      }
      else if(count==2) {
        p.setRent(2_RR_RENT);
      }
      else if(count==3) {
        p.setRent(3_RR_RENT);
      }
      else if(count==4) {
        p.setRent(4_RR_RENT);
      }
    }
  }
}
