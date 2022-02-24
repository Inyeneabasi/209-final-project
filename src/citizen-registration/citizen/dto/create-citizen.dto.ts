export class CreateCitizenDto {
  readonly firstName: string;
  readonly middleName?: string;
  readonly lastName: string;
  readonly dateOfBirth?: Date;
  readonly nationality?: string;
  readonly countryofbirth: string;
  readonly stateofbirth: string;
  readonly Townofbirth: string;
  readonly Residenceaddress: string;
  readonly Profession: string;
}
