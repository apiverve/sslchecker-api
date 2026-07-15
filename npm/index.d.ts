declare module '@apiverve/sslchecker' {
  export interface sslcheckerOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface sslcheckerResponse {
    status: string;
    error: string | null;
    data: SSLCertificateCheckerData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SSLCertificateCheckerData {
      subject:         Issuer;
      issuer:          Issuer;
      subjectaltname:  null | string;
      infoAccess:      { [key: string]: (null | string)[] };
      ca:              boolean | null;
      bits:            number | null;
      validFrom:       null | string;
      validTo:         null | string;
      serialNumber:    null | string;
      domain:          null | string;
      isExpired:       boolean | null;
      isValid:         boolean | null;
      daysUntilExpiry: number | null;
      isExpiringSoon:  boolean | null;
      isSelfSigned:    boolean | null;
  }
  
  interface Issuer {
      c:   null | string;
      o:   null | string;
      cn:  null | string;
      st?: null | string;
  }

  export default class sslcheckerWrapper {
    constructor(options: sslcheckerOptions);

    execute(callback: (error: any, data: sslcheckerResponse | null) => void): Promise<sslcheckerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: sslcheckerResponse | null) => void): Promise<sslcheckerResponse>;
    execute(query?: Record<string, any>): Promise<sslcheckerResponse>;
  }
}
