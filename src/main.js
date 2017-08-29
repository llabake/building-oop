export class Building {
    constructor(args) {
      this.location = args.location;
      this.value = args.value;
      this.width = args.width;
      this.height = args.height;
      this.builtDate = args.builtDate;
  }
  
    getDimension() {
      return `${this.height} X ${this.width}`;
    }
    
    getBuiltDate () {
        return `Building Completed on ${this.builtDate}.`;
    }

}
  
export class ResidentialBuilding extends Building {
    constructor(args){
        super(args);
        this._type = 'residential';
        this.noOfApartments = args.noOfApartments;
        this.noOfOccupants = args.noOfOccupants;
    }
    get type() {
        return this._type;
    }
}
  
export class CommercialBuilding extends Building {
    constructor(args){
        super(args);
        this._type = 'commercial';
        this.noOfOffices = args.noOfOffices;
    }
    get type() {
        return this._type;  
    }
}
  
export class UtilityBuilding extends Building {
    constructor(args){
        super(args);
        this._type = 'utility';
        
    }
    get type() {
        return 'utility'; 
    }
}