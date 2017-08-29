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
        return `Building Completed on ${this._builtDate}.`;
    }

}
  
export class ResidentialBuilding extends Building {
    constructor(props){
        super(props.location, props.value, props.width, props.height);
        this._type = 'residential';
        this.noOfApartments = props.noOfApartments;
        this.noOfOccupants = props.noOfOccupants;
    }
    get type() {
        return this._type;
    }
}
  
export class CommercialBuilding extends Building {
    constructor(args){
        super(args);
        this._type = 'commercial';
        this.noOfOffices = props.noOfOffices;
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