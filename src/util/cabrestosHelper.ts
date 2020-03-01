export class CabrestosHelper {
  constructor(
    readonly flagSupportLength: number,
    readonly lineSeparation: number,
    readonly centerLineLength: number
  ) {}

  validateInput(): boolean {
    return this.flagSupportLength % this.lineSeparation === 0;
  }

  generateSuggestion(): CabrestosHelper {
    if (this.validateInput()) {
      return this;
    }
    const validFlagSLengthCM =
      Math.ceil(
        this.flagSupportLength / this.lineSeparation
      ) * this.lineSeparation;
    return new CabrestosHelper(
      validFlagSLengthCM,
      this.lineSeparation,
      this.centerLineLength
    );
  }

  calculateCabrestos(): number[] {
    if (!this.validateInput()) {
      throw new Error("Invalid Configuration");
    }
    const output: number[] = [];
    const farestPointToCenterCM = this.flagSupportLength / 2;
    const cabrestosTotal =
      this.flagSupportLength / this.lineSeparation + 1;
    for (let i = 0; i < cabrestosTotal; i++) {
      const distanceToCenterCm = Math.abs(
        farestPointToCenterCM - i * this.lineSeparation
      );
      const cabresto = this.distancePit(
        distanceToCenterCm,
        this.centerLineLength
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
