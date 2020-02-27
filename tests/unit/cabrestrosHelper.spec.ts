import { CabrestosHelper } from "@/util/cabrestosHelper";

describe("CabrestosHelper", () => {
  const flagLengthMeters = 1;
  const cLineMeters = 10;
  const notDivisor = 30;
  const divisor = 20;

  const invalidInput = CabrestosHelper.fromStandardInput(
    flagLengthMeters,
    notDivisor,
    cLineMeters
  );
  const validInput = CabrestosHelper.fromStandardInput(
    flagLengthMeters,
    divisor,
    cLineMeters
  );

  describe("validateInput", () => {
    test("false when the separation is not a divisor of the full length", () => {
      expect(invalidInput.validateInput()).toBeFalsy();
    });

    test("true when the separation is a divisor of the full length", () => {
      expect(validInput.validateInput()).toBeTruthy();
    });
  });

  describe("generateSuggestionInput", () => {
    test("returns the closest valid input for the given configuration", () => {
      const suggestion = invalidInput.generateSuggestion();
      expect(suggestion).not.toBe(invalidInput);
      expect(suggestion.validateInput()).toEqual(true);
      expect(suggestion.flagSupportLengthCMeters).toEqual(120);
      expect(suggestion.centerLineLengthCMeters).toEqual(cLineMeters * 100);
      expect(suggestion.lineSeparationCentimeters).toEqual(notDivisor);
    });

    test("if configuration is already valid returns itself", () => {
      const suggestion = validInput.generateSuggestion();
      expect(suggestion).toBe(validInput);
    });
  });

  describe("calculateCabrestos", () => {
    const evenConfiguration = CabrestosHelper.fromStandardInput(1, 20, 5);
    const oddConfiguration = CabrestosHelper.fromStandardInput(1, 25, 5);

    test("raises exception if configuration is not valid", () => {
      expect(() => invalidInput.calculateCabrestos()).toThrow();
    });

    test("with even configuration", () => {
      const cal = evenConfiguration.calculateCabrestos();
      expect(cal.length).toEqual(6);
      expect(cal).toEqual([502.49, 500.9, 500.1, 500.1, 500.9, 502.49]);
    });

    test("with odd configuration", () => {
      const cal = oddConfiguration.calculateCabrestos();
      expect(cal.length).toEqual(5);
      expect(cal).toEqual([502.49, 500.62, 500, 500.62, 502.49]);
    });
  });
});
