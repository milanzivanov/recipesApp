export class Recipe {
  // public name: string;
  // public description: string;
  // public imagePath: string;

  // // long way
  // constructor(name: string, desc: string, imagePath: string) {
  //   this.name = name;
  //   this.imagePath = imagePath;
  //   this.description = desc;
  // }

  // short way
  constructor(private name: string,
              private description: string,
              private imagePath: string) {}
}
