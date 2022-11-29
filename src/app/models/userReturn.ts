export class UserReturn {

    constructor( public kind: string, public users?:UsersEntity[]){
        
    }
  }
  export interface UsersEntity {
    localId: string;
    email: string;
    passwordHash: string;
    emailVerified: boolean;
    passwordUpdatedAt: number;
    providerUserInfo?: (ProviderUserInfoEntity)[] | null;
    validSince: string;
    lastLoginAt: string;
    createdAt: string;
    lastRefreshAt: string;
  }
  export interface ProviderUserInfoEntity {
    providerId: string;
    federatedId: string;
    email: string;
    rawId: string;
  }
  