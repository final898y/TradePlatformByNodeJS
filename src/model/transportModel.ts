export default interface ItransportResult {
  success: boolean;
  statusCode: number;
  message: string;
  data?: object;
  JwtToken?: string;
}
