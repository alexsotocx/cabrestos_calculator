export class CabrestosHelper {
  constructor(
    readonly flagSupportLengthCMeters: number,
    readonly lineSeparationCentimeters: number,
    readonly centerLineLengthCMeters: number
  ) {}

  validateInput(): boolean {
    return this.flagSupportLengthCMeters % this.lineSeparationCentimeters === 0;
  }

  generateSuggestion(): CabrestosHelper {
    if (this.validateInput()) {
      return this;
    }
    const validFlagSLengthCM =
      Math.ceil(
        this.flagSupportLengthCMeters / this.lineSeparationCentimeters
      ) * this.lineSeparationCentimeters;
    return new CabrestosHelper(
      validFlagSLengthCM,
      this.lineSeparationCentimeters,
      this.centerLineLengthCMeters
    );
  }

  calculateCabrestos(): number[] {
    if (!this.validateInput()) {
      throw new Error("Invalid Configuration");
    }
    const output: number[] = [];
    const farestPointToCenterCM = this.flagSupportLengthCMeters / 2;
    const cabrestosTotal =
      this.flagSupportLengthCMeters / this.lineSeparationCentimeters + 1;
    for (let i = 0; i < cabrestosTotal; i++) {
      const distanceToCenterCm = Math.abs(
        farestPointToCenterCM - i * this.lineSeparationCentimeters
      );
      const cabresto = this.distancePit(
        distanceToCenterCm,
        this.centerLineLengthCMeters
      );
      output.push(+cabresto.toFixed(2));
    }
    return output;
  }

  static fromStandardInput(
    flagLengthMeters: number,
    lineSeparationCentimeters: number,
    centerLineMeters: number
  ): CabrestosHelper {
    return new CabrestosHelper(
      flagLengthMeters * 100,
      lineSeparationCentimeters,
      centerLineMeters * 100
    );
  }

  private distancePit(length: number, high: number): number {
    return Math.sqrt(length * length + high * high);
  }
}
