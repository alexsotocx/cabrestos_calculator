export class CabrestosHelper {
  constructor(
    readonly flagSupportLengthMeters: number,
    readonly lineSeparationCentimeters: number,
    readonly centerLineLengthMeters: number,
  ) { }

  validateInput(): boolean {
    return this.flagSupportCM() % this.lineSeparationCentimeters === 0;
  }

  generateSuggestion(): CabrestosHelper {
    if (this.validateInput()) {
      return this;
    }
    const validFlagSLengthCM = Math.ceil(this.flagSupportCM() / this.lineSeparationCentimeters) * this.lineSeparationCentimeters;
    return new CabrestosHelper(
      validFlagSLengthCM / 100,
      this.lineSeparationCentimeters,
      this.centerLineLengthMeters,
    );
  }

  private flagSupportCM() {
    return this.flagSupportLengthMeters * 100;
  }
}
