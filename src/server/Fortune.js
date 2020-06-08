class Fortune {
  constructor(string,wealthImpact) {
    this.string=string;
    this.wealthImpact = wealthImpact;
  }

  getString() {
    return this.string;
  }

  applyWealthImpact(person) {
    person.updateWealth(wealthImpact);
  }
}
