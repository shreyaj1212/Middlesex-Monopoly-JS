interface Monopoly{
	constructor(locationsIncluded) {
		this.locationsIncluded = locationsIncluded;
		this.isMonopoly = false;
	}
	public void updateMonopolyStatus();
	public void updateRents();
}
